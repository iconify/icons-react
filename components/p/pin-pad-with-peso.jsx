import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enm4i5bnq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enm4i5bnq"/>`,
		"fallback": "pinhead:pin-pad-with-peso",
	});
}

export default Component;
