import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rolv1m5rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rolv1m5rx"/>`,
		"fallback": "vadivam:phone-missed",
	});
}

export default Component;
