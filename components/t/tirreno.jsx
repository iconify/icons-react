import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4gv-v-ly.css';
import '../../css/u/uwxio7x7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4gv-v-ly"/><path class="uwxio7x7b"/>`,
		"fallback": "selfhst:tirreno",
	});
}

export default Component;
