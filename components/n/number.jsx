import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpeh4lb3t.css';
import '../../css/n/nyxp3bb8t.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpeh4lb3t"/><path class="nyxp3bb8t"/>`,
		"fallback": "formkit:number",
	});
}

export default Component;
