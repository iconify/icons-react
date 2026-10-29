import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlk_m2tvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlk_m2tvj"/>`,
		"fallback": "vadivam:panel-bottom",
	});
}

export default Component;
