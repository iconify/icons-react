import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnd8lgb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnd8lgb8f"/>`,
		"fallback": "thesvg-color:kiwix",
	});
}

export default Component;
