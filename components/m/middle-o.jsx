import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zueiq1v0a.css';
import '../../css/k/k1dg41fxr.css';
import '../../css/w/w19j9uu-g.css';
import '../../css/z/zc7akvbfn.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zueiq1v0a"/><circle class="k1dg41fxr"/><circle class="w19j9uu-g"/><path class="zc7akvbfn"/>`,
		"fallback": "iwwa:middle-o",
	});
}

export default Component;
