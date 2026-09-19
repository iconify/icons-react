import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0lpc6lrj.css';
import '../../css/w/wj027_bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0lpc6lrj"/><path clip-rule="evenodd" class="wj027_bre"/>`,
		"fallback": "basil:settings-alt-solid",
	});
}

export default Component;
