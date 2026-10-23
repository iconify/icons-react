import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe43_rbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe43_rbhp"/>`,
		"fallback": "vadivam:pill-bottle",
	});
}

export default Component;
