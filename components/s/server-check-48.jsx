import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k71mgzbis.css';
import '../../css/a/a3siao3xy.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k71mgzbis"/><path class="a3siao3xy"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:server-check-48",
	});
}

export default Component;
