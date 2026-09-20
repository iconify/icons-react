import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykhg1_noq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykhg1_noq"/>`,
		"fallback": "streamline:interface-alert-radio-active-1-danger-nuke-radiation-nuclear-warning-alert-radioactive-caution",
	});
}

export default Component;
