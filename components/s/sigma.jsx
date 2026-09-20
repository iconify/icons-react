import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2xt3z6tq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2xt3z6tq"/>`,
		"fallback": "streamline-color:sigma",
	});
}

export default Component;
