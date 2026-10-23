import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk3my9agl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk3my9agl"/>`,
		"fallback": "vadivam:sport-shoe",
	});
}

export default Component;
