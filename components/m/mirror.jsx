import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5n7e6bfa.css';
import '../../css/f/f2u1hw__j.css';
import '../../css/i/i5arftb3u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x5n7e6bfa"/><path class="f2u1hw__j"/><path class="i5arftb3u"/></g>`,
		"fallback": "fluent-emoji-flat:mirror",
	});
}

export default Component;
