import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-j2nt4-t.css';

const viewBox = {"width":684,"height":677};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-j2nt4-t"/>`,
		"fallback": "ls:line",
	});
}

export default Component;
