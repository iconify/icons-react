import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1vpt6b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1vpt6b7w"/>`,
		"fallback": "thesvg-color:the-planetary-society",
	});
}

export default Component;
