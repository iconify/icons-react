import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af1tsbb1b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af1tsbb1b"/>`,
		"fallback": "whh:projectpier",
	});
}

export default Component;
