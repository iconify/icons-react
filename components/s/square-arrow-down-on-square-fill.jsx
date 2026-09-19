import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s47bxlz_f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s47bxlz_f"/>`,
		"fallback": "f7:square-arrow-down-on-square-fill",
	});
}

export default Component;
