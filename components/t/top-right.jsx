import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4ll1_buo.css';
import '../../css/v/vd6phjbuv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4ll1_buo"/><path class="vd6phjbuv"/>`,
		"fallback": "ep:top-right",
	});
}

export default Component;
