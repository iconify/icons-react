import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzs5177np.css';
import '../../css/n/non1cd9gr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzs5177np"/><path class="non1cd9gr"/>`,
		"fallback": "energy-icons:message-question-20",
	});
}

export default Component;
