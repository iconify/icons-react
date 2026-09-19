import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezifkbbit.css';
import '../../css/y/y9p76zb5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ezifkbbit"/><path class="y9p76zb5d"/></g>`,
		"fallback": "fluent-emoji-flat:palm-up-hand-medium-light",
	});
}

export default Component;
