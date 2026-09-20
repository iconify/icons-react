import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp90n_bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp90n_bdo"/>`,
		"fallback": "simple-icons:skype",
	});
}

export default Component;
