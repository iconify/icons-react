import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avn891jjl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avn891jjl"/>`,
		"fallback": "pinhead:rolled-paper-in-bottle",
	});
}

export default Component;
