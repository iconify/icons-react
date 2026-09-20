import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg9_1g56y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg9_1g56y"/>`,
		"fallback": "reicon:textalign-justifycenter",
	});
}

export default Component;
