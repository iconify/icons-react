import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vzjuh1uww.css';
import '../../css/f/fjytxk0gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vzjuh1uww"/><path class="fjytxk0gr"/></g>`,
		"fallback": "reicon:user-circle",
	});
}

export default Component;
