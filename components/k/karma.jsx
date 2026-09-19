import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om4mwxbqv.css';
import '../../css/i/i4ou1xbhh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om4mwxbqv"/><path class="i4ou1xbhh"/>`,
		"fallback": "devicon:karma",
	});
}

export default Component;
