import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udtx5jbky.css';
import '../../css/t/t134q6seg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udtx5jbky"/><path class="t134q6seg"/>`,
		"fallback": "carbon:phone-block-filled",
	});
}

export default Component;
