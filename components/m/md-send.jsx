import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm3sd0tjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm3sd0tjv"/>`,
		"fallback": "ion:md-send",
	});
}

export default Component;
