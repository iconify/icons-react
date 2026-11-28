import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt1lggbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt1lggbpb"/>`,
		"fallback": "iconaut:square-slash-flip-solid",
	});
}

export default Component;
