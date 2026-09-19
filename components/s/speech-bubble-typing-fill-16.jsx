import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu022rzoq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu022rzoq"/>`,
		"fallback": "garden:speech-bubble-typing-fill-16",
	});
}

export default Component;
