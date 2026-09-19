import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6gf_ppof.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6gf_ppof"/>`,
		"fallback": "f7:square-arrow-right",
	});
}

export default Component;
