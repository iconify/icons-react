import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th_2c0ilx.css';
import '../../css/n/nv4ijsbik.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th_2c0ilx"/><path class="nv4ijsbik"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:lock-check-48",
	});
}

export default Component;
