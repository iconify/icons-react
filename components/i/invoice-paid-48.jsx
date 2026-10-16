import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crpcihb-l.css';
import '../../css/k/k1v5xj0bd.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crpcihb-l"/><path class="k1v5xj0bd"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:invoice-paid-48",
	});
}

export default Component;
