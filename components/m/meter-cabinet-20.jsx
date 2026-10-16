import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7yyxubhq.css';
import '../../css/d/d0kcjfbfe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7yyxubhq"/><path class="d0kcjfbfe"/>`,
		"fallback": "energy-icons:meter-cabinet-20",
	});
}

export default Component;
