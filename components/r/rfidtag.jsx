import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4ssq09rn.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4ssq09rn"/>`,
		"fallback": "wpf:rfidtag",
	});
}

export default Component;
