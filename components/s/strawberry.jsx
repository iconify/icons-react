import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnsqrrbig.css';
import '../../css/f/f-af1wzga.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnsqrrbig"/><path class="f-af1wzga"/>`,
		"fallback": "carbon:strawberry",
	});
}

export default Component;
