import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zztq-cb7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zztq-cb7y"/>`,
		"fallback": "quill:list",
	});
}

export default Component;
