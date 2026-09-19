import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfwtp_bhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfwtp_bhx"/>`,
		"fallback": "at-icons:laser-gun",
	});
}

export default Component;
