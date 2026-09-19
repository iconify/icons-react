import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr5fyxn9w.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr5fyxn9w"/>`,
		"fallback": "el:video-alt",
	});
}

export default Component;
