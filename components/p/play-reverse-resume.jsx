import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib45qtiwb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib45qtiwb"/>`,
		"fallback": "fluent-mdl2:play-reverse-resume",
	});
}

export default Component;
