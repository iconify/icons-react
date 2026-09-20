import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_p4ewb1c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_p4ewb1c"/>`,
		"fallback": "temaki:library",
	});
}

export default Component;
