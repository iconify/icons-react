import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e59lt6b9k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e59lt6b9k"/>`,
		"fallback": "lsicon:measure-filled",
	});
}

export default Component;
