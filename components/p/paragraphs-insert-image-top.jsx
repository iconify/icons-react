import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w2jv9c-it.css';
import '../../css/c/ci0i99byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w2jv9c-it"/><path class="ci0i99byj"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-insert-image-top",
	});
}

export default Component;
