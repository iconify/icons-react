import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgva3g5if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgva3g5if"/>`,
		"fallback": "vadivam:philippine-peso",
	});
}

export default Component;
