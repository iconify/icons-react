import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_mvju3ef.css';
import '../../css/h/h_1n0zf8d.css';
import '../../css/t/tik2kabvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="f_mvju3ef"/><path class="h_1n0zf8d"/><path class="tik2kabvz"/>`,
		"fallback": "selfhst:netalertx",
	});
}

export default Component;
