import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9hdpufda.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9hdpufda"/>`,
		"fallback": "fontisto:snapchat",
	});
}

export default Component;
