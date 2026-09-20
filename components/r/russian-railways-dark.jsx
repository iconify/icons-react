import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrb7pj6bi.css';
import '../../css/e/ekdd0gbaq.css';

const viewBox = {"width":116.5,"height":62.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrb7pj6bi"/><path class="ekdd0gbaq"/>`,
		"fallback": "thesvg-color:russian-railways-dark",
	});
}

export default Component;
