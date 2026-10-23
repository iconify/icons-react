import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iebl_j8zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iebl_j8zy"/>`,
		"fallback": "vadivam:square-dashed-bottom",
	});
}

export default Component;
