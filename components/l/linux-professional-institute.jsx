import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyax_mekw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyax_mekw"/>`,
		"fallback": "thesvg:linux-professional-institute",
	});
}

export default Component;
