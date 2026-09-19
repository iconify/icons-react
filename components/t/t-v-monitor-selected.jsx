import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/addk9z6wr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="addk9z6wr"/>`,
		"fallback": "fluent-mdl2:t-v-monitor-selected",
	});
}

export default Component;
