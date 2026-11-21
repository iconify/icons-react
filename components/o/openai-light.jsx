import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh3ngdcch.css';

const viewBox = {"width":354.674,"height":354.674,"left":180.5,"top":180.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh3ngdcch"/>`,
		"fallback": "thesvg-color:openai-light",
	});
}

export default Component;
