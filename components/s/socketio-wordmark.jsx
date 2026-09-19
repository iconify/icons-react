import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y3wwogb_e.css';
import '../../css/o/omos15brj.css';
import '../../css/n/np6wssw9i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="y3wwogb_e"/><path class="omos15brj"/><path class="np6wssw9i"/></g>`,
		"fallback": "devicon:socketio-wordmark",
	});
}

export default Component;
