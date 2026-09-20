import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j73-s3h3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j73-s3h3g"/>`,
		"fallback": "qlementine-icons:octogon-filled-32",
	});
}

export default Component;
