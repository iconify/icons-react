import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxg60abnf.css';
import '../../css/o/oajkybcsc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxg60abnf"/><path class="oajkybcsc"/>`,
		"fallback": "cryptocurrency:mod",
	});
}

export default Component;
