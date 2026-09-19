import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr2ui3bao.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr2ui3bao"/>`,
		"fallback": "fa7-solid:umbrella",
	});
}

export default Component;
