import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r06v75bnq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r06v75bnq"/>`,
		"fallback": "fluent-mdl2:mail-check",
	});
}

export default Component;
