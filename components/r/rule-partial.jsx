import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciqspz6bd.css';
import '../../css/v/v_ge03b8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciqspz6bd"/><path class="v_ge03b8m"/>`,
		"fallback": "carbon:rule-partial",
	});
}

export default Component;
