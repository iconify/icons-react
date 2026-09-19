import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_dpo2bur.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_dpo2bur"/>`,
		"fallback": "garden:relationshape-sell-26",
	});
}

export default Component;
