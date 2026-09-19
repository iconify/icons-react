import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfj89pb4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfj89pb4x"/>`,
		"fallback": "bi:sign-intersection-fill",
	});
}

export default Component;
