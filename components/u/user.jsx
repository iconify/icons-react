import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq39e_bxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq39e_bxv"/>`,
		"fallback": "nimbus:user",
	});
}

export default Component;
