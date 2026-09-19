import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf7a0hbiv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf7a0hbiv"/>`,
		"fallback": "fluent-mdl2:mail-solid",
	});
}

export default Component;
