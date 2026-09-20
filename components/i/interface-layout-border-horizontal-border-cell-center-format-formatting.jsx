import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkxq1_v_l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkxq1_v_l"/>`,
		"fallback": "streamline:interface-layout-border-horizontal-border-cell-center-format-formatting",
	});
}

export default Component;
