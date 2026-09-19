import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jtck66bki.css';
import '../../css/t/t-u0yzblp.css';
import '../../css/w/wrzhokalt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jtck66bki"/><circle class="t-u0yzblp"/><path class="wrzhokalt"/></g>`,
		"fallback": "feather:users",
	});
}

export default Component;
