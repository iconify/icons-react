import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am0biv4xa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am0biv4xa"/>`,
		"fallback": "pinhead:pickleball-paddle",
	});
}

export default Component;
