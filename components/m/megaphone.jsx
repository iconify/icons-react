import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb_npgb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb_npgb5p"/>`,
		"fallback": "proicons:megaphone",
	});
}

export default Component;
