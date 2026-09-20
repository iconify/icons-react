import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpga_ecty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpga_ecty"/>`,
		"fallback": "material-icon-theme:salesforce",
	});
}

export default Component;
