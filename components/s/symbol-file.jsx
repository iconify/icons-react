import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk2po9bxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk2po9bxk"/>`,
		"fallback": "codicon:symbol-file",
	});
}

export default Component;
