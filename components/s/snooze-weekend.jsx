import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp88opbqq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp88opbqq"/>`,
		"fallback": "quill:snooze-weekend",
	});
}

export default Component;
