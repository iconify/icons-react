import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr_7szbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr_7szbsp"/>`,
		"fallback": "energy-icons:tornado-48",
	});
}

export default Component;
