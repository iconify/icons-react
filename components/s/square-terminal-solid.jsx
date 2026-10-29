import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxv1a-bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxv1a-bpb"/>`,
		"fallback": "withicons:square-terminal-solid",
	});
}

export default Component;
