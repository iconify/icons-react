import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj6o8abyb.css';
import '../../css/b/bnus8tbil.css';
import '../../css/t/t3kxshl8m.css';

const viewBox = {"width":262,"height":262,"left":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj6o8abyb"/><path class="bnus8tbil"/><path class="t3kxshl8m"/>`,
		"fallback": "thesvg-color:sourcegraph",
	});
}

export default Component;
