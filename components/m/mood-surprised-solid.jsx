import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc96cz0xq.css';
import '../../css/j/jx5abbk2w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc96cz0xq"/><path clip-rule="evenodd" class="jx5abbk2w"/>`,
		"fallback": "teenyicons:mood-surprised-solid",
	});
}

export default Component;
