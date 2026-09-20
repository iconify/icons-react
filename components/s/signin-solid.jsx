import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv77d5bas.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bv77d5bas"/>`,
		"fallback": "teenyicons:signin-solid",
	});
}

export default Component;
