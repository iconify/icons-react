import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vzwqrcc-q.css';
import '../../css/q/q-v2fob8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vzwqrcc-q"/><path class="q-v2fob8a"/></g>`,
		"fallback": "streamline-color:pets-allowed-flat",
	});
}

export default Component;
