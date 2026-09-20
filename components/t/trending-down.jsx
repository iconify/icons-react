import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vktmc_wue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vktmc_wue"/>`,
		"fallback": "vadivam:trending-down",
	});
}

export default Component;
