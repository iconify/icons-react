import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxfz19a0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxfz19a0n"/>`,
		"fallback": "vadivam:star-off",
	});
}

export default Component;
