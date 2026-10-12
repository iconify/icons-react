import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl6j6835z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl6j6835z"/>`,
		"fallback": "garden:voicemail-20",
	});
}

export default Component;
