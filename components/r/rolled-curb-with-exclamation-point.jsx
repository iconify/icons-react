import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htrmdw6ic.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htrmdw6ic"/>`,
		"fallback": "pinhead:rolled-curb-with-exclamation-point",
	});
}

export default Component;
