import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4bggwbfv.css';
import '../../css/e/edd5ribkz.css';
import '../../css/m/m498jh0so.css';
import '../../css/a/a0tiktb0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4bggwbfv"/><path class="edd5ribkz"/><path class="m498jh0so"/><path class="a0tiktb0s"/></g>`,
		"fallback": "fluent-emoji-flat:rugby-football",
	});
}

export default Component;
