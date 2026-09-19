import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abgdj92nu.css';
import '../../css/g/ggga5ib7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abgdj92nu"/><path class="ggga5ib7k"/>`,
		"fallback": "ion:pull-request",
	});
}

export default Component;
