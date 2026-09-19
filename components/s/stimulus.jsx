import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n99vqw96w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n99vqw96w"/>`,
		"fallback": "devicon:stimulus",
	});
}

export default Component;
