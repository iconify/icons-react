import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmecbubtg.css';
import '../../css/q/qqeg1x_1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmecbubtg"/><path class="qqeg1x_1x"/>`,
		"fallback": "tdesign:robot-2-filled",
	});
}

export default Component;
