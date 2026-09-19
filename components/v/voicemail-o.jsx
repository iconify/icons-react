import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9jgmjwvy.css';
import '../../css/i/i_5bj8e-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f9jgmjwvy"/><path class="i_5bj8e-s"/></g>`,
		"fallback": "gg:voicemail-o",
	});
}

export default Component;
