import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3ot1kbka.css';
import '../../css/o/o88qk5-dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b3ot1kbka"/><path class="o88qk5-dk"/></g>`,
		"fallback": "lucide:package-question-mark",
	});
}

export default Component;
