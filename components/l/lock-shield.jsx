import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zdtg4zb5k.css';
import '../../css/g/g-e973v2v.css';
import '../../css/k/k237b059b.css';
import '../../css/d/d8slobc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zdtg4zb5k"/><path class="g-e973v2v"/><path class="k237b059b"/><path class="d8slobc7m"/></g>`,
		"fallback": "streamline-ultimate:lock-shield",
	});
}

export default Component;
