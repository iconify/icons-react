import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnqx-61mq.css';

const viewBox = {"width":15.98,"height":18.229,"left":-1.663,"top":-1.663};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnqx-61mq"/>`,
		"fallback": "thesvg-color:pokerstars",
	});
}

export default Component;
