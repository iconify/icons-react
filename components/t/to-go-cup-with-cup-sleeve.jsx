import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5wxbs7ki.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5wxbs7ki"/>`,
		"fallback": "pinhead:to-go-cup-with-cup-sleeve",
	});
}

export default Component;
