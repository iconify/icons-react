import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sax_p1s3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sax_p1s3w"/>`,
		"fallback": "cbi:prusa-mini",
	});
}

export default Component;
