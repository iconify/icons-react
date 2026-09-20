import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8q6hq01f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8q6hq01f"/>`,
		"fallback": "reicon:textalign-justifyright-filled",
	});
}

export default Component;
