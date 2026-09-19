import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9utlrxw.css';
import '../../css/j/jfmxxebmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb9utlrxw"/><path class="jfmxxebmr"/>`,
		"fallback": "boxicons:microphone-filled",
	});
}

export default Component;
