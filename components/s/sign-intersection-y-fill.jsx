import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-yyopb-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-yyopb-n"/>`,
		"fallback": "bi:sign-intersection-y-fill",
	});
}

export default Component;
