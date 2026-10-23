import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-v_a5bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-v_a5bwv"/>`,
		"fallback": "vadivam:panel-right",
	});
}

export default Component;
