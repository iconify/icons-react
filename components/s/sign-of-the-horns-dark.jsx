import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukkxi5v4f.css';
import '../../css/o/omaieub8a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ukkxi5v4f"/><path class="omaieub8a"/></g>`,
		"fallback": "fluent-emoji-flat:sign-of-the-horns-dark",
	});
}

export default Component;
