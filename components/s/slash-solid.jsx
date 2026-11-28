import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn-ia8b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn-ia8b4j"/>`,
		"fallback": "iconaut:slash-solid",
	});
}

export default Component;
