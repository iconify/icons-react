import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byz7bnbzd.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byz7bnbzd"/>`,
		"fallback": "websymbol:tumblr-rect",
	});
}

export default Component;
