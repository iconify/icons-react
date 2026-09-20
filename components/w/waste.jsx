import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djko6_bxw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djko6_bxw"/>`,
		"fallback": "temaki:waste",
	});
}

export default Component;
