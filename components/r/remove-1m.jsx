import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2brmfbab.css';
import '../../css/a/a3jz1tb7x.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2brmfbab"/><path class="a3jz1tb7x"/>`,
		"fallback": "iwwa:remove-1m",
	});
}

export default Component;
