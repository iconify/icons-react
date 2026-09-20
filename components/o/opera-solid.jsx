import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw82a8b6o.css';
import '../../css/u/u048i3bwl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw82a8b6o"/><path class="u048i3bwl"/>`,
		"fallback": "teenyicons:opera-solid",
	});
}

export default Component;
