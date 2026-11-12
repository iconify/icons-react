import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd90cib8o.css';
import '../../css/o/o88qk5-dk.css';
import '../../css/h/h7ezhxj7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gd90cib8o"/><path class="o88qk5-dk"/><path class="h7ezhxj7s"/></g>`,
		"fallback": "lucide:package-question-mark",
	});
}

export default Component;
