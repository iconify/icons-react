import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_r-cv1uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_r-cv1uc"/>`,
		"fallback": "keyline-icons:umbrella-sharp",
	});
}

export default Component;
