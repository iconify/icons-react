import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agefw_bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agefw_bcf"/>`,
		"fallback": "thesvg-color:starship",
	});
}

export default Component;
