import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpjo1n7rm.css';
import '../../css/a/a1gawlb3a.css';
import '../../css/g/gyy97vb0k.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpjo1n7rm"/><path class="a1gawlb3a"/><path class="gyy97vb0k"/>`,
		"fallback": "iwwa:map",
	});
}

export default Component;
