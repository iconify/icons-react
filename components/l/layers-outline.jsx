import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do--7v-3h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do--7v-3h"/>`,
		"fallback": "teenyicons:layers-outline",
	});
}

export default Component;
