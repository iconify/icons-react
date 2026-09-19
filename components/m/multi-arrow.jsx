import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rapo_tbbs.css';

const viewBox = {"width":2208,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rapo_tbbs"/>`,
		"fallback": "vs:multi-arrow",
	});
}

export default Component;
