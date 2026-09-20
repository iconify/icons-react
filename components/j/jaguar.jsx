import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p30zzub6y.css';

const viewBox = {"width":929.72,"height":115.03};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p30zzub6y"/>`,
		"fallback": "thesvg-color:jaguar",
	});
}

export default Component;
