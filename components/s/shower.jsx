import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvsu1r03w.css';

const viewBox = {"width":1920,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvsu1r03w"/>`,
		"fallback": "fa:shower",
	});
}

export default Component;
