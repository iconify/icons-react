import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk0zk7bxh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zk0zk7bxh"/>`,
		"fallback": "streamline:smiley-sparks-solid",
	});
}

export default Component;
