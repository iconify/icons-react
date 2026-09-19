import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvhljtbdd.css';
import '../../css/d/dwu99p9fj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvhljtbdd"/><path class="dwu99p9fj"/>`,
		"fallback": "ep:picture",
	});
}

export default Component;
