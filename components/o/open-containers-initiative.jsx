import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzno4qqhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzno4qqhr"/>`,
		"fallback": "thesvg-color:open-containers-initiative",
	});
}

export default Component;
