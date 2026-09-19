import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmhddevn.css';
import '../../css/b/b-_0m7wwh.css';
import '../../css/u/ueg81y61d.css';
import '../../css/y/yi1xvlb8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lgmhddevn"/><path class="b-_0m7wwh"/><path class="ueg81y61d"/><path class="yi1xvlb8f"/>`,
		"fallback": "carbon:task-view",
	});
}

export default Component;
