import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs5bxsbdw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs5bxsbdw"/>`,
		"fallback": "fluent-mdl2:user-sync",
	});
}

export default Component;
