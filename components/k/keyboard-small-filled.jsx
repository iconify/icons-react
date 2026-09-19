import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/porap235f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="porap235f"/>`,
		"fallback": "dinkie-icons:keyboard-small-filled",
	});
}

export default Component;
