import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf9uo9box.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf9uo9box"/>`,
		"fallback": "fluent-mdl2:plug-solid",
	});
}

export default Component;
