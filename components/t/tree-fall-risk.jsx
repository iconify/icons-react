import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nknwp425q.css';
import '../../css/z/zai8nab0m.css';
import '../../css/k/koih2mwpz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nknwp425q"/><path class="zai8nab0m"/><path class="koih2mwpz"/>`,
		"fallback": "carbon:tree-fall-risk",
	});
}

export default Component;
