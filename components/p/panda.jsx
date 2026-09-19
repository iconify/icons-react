import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhb7xqbsv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rhb7xqbsv"/>`,
		"fallback": "fluent-emoji-high-contrast:panda",
	});
}

export default Component;
