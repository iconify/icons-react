import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnaxm_n2s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnaxm_n2s"/>`,
		"fallback": "f7:number-square-fill",
	});
}

export default Component;
