import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqmgz0doi.css';
import '../../css/l/ld018kbkh.css';
import '../../css/f/f60e8jbjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqmgz0doi"/><path class="ld018kbkh"/><path class="f60e8jbjq"/>`,
		"fallback": "cil:money",
	});
}

export default Component;
