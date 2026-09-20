import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcuo68biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcuo68biu"/>`,
		"fallback": "simple-icons:spacy",
	});
}

export default Component;
