import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7d751fdm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l7d751fdm"/>`,
		"fallback": "streamline-flex:voice-mail-solid",
	});
}

export default Component;
