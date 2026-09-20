import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeme7nnhw.css';
import '../../css/y/yt3wrgl6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeme7nnhw"/><path class="yt3wrgl6l"/>`,
		"fallback": "thesvg-color:qingyan",
	});
}

export default Component;
