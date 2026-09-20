import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8jixq.css';
import '../../css/q/qq3t6k.css';
import '../../css/d/d-45nhxp.css';
import '../../css/r/r-from-0px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8jixq"/><circle class="qq3t6k"/>`,
		"fallback": "line-md:watch",
	});
}

export default Component;
