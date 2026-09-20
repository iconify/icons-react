import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9rdtub8w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9rdtub8w"/>`,
		"fallback": "picon:jujutsu",
	});
}

export default Component;
