import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/ssaz-0g6l.css';
import '../../css/o/oudoq5iui.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ssaz-0g6l"/><path class="oudoq5iui"/></g>`,
		"fallback": "streamline-flex:politics-speech",
	});
}

export default Component;
