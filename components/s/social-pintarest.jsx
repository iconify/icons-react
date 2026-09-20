import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lex-7n2gn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lex-7n2gn"/>`,
		"fallback": "simple-line-icons:social-pintarest",
	});
}

export default Component;
