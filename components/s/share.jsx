import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awks9rbuo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awks9rbuo"/>`,
		"fallback": "icons8:share",
	});
}

export default Component;
