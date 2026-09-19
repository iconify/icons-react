import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/numbr1bew.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="numbr1bew"/>`,
		"fallback": "f7:stopwatch",
	});
}

export default Component;
