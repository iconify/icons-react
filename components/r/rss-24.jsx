import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe2ertcwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe2ertcwz"/>`,
		"fallback": "octicon:rss-24",
	});
}

export default Component;
