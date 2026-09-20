import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts1sl1b6n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts1sl1b6n"/>`,
		"fallback": "teenyicons:sd-card-outline",
	});
}

export default Component;
