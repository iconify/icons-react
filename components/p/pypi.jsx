import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfa7lr5ki.css';

const viewBox = {"width":454,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfa7lr5ki"/>`,
		"fallback": "file-icons:pypi",
	});
}

export default Component;
