import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb05kotbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb05kotbh"/>`,
		"fallback": "vadivam:mail-search",
	});
}

export default Component;
