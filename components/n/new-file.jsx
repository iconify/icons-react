import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmg3ne9zk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmg3ne9zk"/>`,
		"fallback": "codicon:new-file",
	});
}

export default Component;
