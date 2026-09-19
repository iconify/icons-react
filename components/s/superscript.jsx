import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpfkku9mr.css';

const viewBox = {"width":1536,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpfkku9mr"/>`,
		"fallback": "fa:superscript",
	});
}

export default Component;
