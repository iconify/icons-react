import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrrsb2b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrrsb2b9x"/>`,
		"fallback": "thesvg-color:sina-weibo",
	});
}

export default Component;
