import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd_hi_bfp.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd_hi_bfp"/>`,
		"fallback": "whh:pigpenz",
	});
}

export default Component;
