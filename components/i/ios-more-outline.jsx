import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwyxrkbgu.css';
import '../../css/e/ec9sckbjq.css';
import '../../css/g/grxa6ebnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwyxrkbgu"/><path class="ec9sckbjq"/><path class="grxa6ebnn"/>`,
		"fallback": "ion:ios-more-outline",
	});
}

export default Component;
