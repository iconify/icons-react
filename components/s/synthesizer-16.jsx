import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh3pbsbuz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jh3pbsbuz"/>`,
		"fallback": "qlementine-icons:synthesizer-16",
	});
}

export default Component;
