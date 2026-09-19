import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-y0q6rwd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-y0q6rwd"/>`,
		"fallback": "bpmn:lane-insert-above",
	});
}

export default Component;
