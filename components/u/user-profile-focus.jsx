import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_f4vbmu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj_f4vbmu"/>`,
		"fallback": "streamline:user-profile-focus",
	});
}

export default Component;
