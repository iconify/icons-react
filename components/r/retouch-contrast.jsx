import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1diztbjw.css';
import '../../css/b/bhl7pu3se.css';
import '../../css/x/xt2z68b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1diztbjw"/><path class="bhl7pu3se"/><path class="xt2z68b3g"/>`,
		"fallback": "streamline-freehand:retouch-contrast",
	});
}

export default Component;
