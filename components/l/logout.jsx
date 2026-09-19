import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi0-5pbvt.css';
import '../../css/z/z6nnhfbxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi0-5pbvt"/><path class="z6nnhfbxd"/>`,
		"fallback": "carbon:logout",
	});
}

export default Component;
