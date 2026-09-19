import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr51um7au.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr51um7au"/>`,
		"fallback": "icomoon-free:share2",
	});
}

export default Component;
