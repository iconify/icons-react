import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp81v-bgs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp81v-bgs"/>`,
		"fallback": "teenyicons:upload-outline",
	});
}

export default Component;
