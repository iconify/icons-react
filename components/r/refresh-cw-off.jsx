import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdtygrt-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdtygrt-y"/>`,
		"fallback": "vadivam:refresh-cw-off",
	});
}

export default Component;
