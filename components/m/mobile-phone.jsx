import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a81a70bqz.css';
import '../../css/u/u9q9a8bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a81a70bqz"/><path class="u9q9a8bwe"/></g>`,
		"fallback": "mage:mobile-phone",
	});
}

export default Component;
