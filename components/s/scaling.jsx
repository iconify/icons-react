import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nui_d4bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nui_d4bmt"/>`,
		"fallback": "vadivam:scaling",
	});
}

export default Component;
