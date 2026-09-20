import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu4ad0blw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cu4ad0blw"/>`,
		"fallback": "streamline-flex:nurse-assistant-emergency-remix",
	});
}

export default Component;
