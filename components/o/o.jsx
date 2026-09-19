import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im7ehtbzp.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im7ehtbzp"/>`,
		"fallback": "whh:o",
	});
}

export default Component;
