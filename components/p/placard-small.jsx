import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2-777_wb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2-777_wb"/>`,
		"fallback": "dinkie-icons:placard-small",
	});
}

export default Component;
