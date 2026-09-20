import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhgcf8bqg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhgcf8bqg"/>`,
		"fallback": "teenyicons:rupee-outline",
	});
}

export default Component;
