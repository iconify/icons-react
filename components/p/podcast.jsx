import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lex4kb0jo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lex4kb0jo"/>`,
		"fallback": "dinkie-icons:podcast",
	});
}

export default Component;
