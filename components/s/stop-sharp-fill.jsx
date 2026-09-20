import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv4r938lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv4r938lj"/>`,
		"fallback": "keyline-icons:stop-sharp-fill",
	});
}

export default Component;
