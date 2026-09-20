import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/av7hbrb6l.css';
import '../../css/x/xlb1_-txj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="av7hbrb6l"/><path class="xlb1_-txj"/></g>`,
		"fallback": "streamline:virus-antivirus",
	});
}

export default Component;
