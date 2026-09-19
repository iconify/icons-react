import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ms5q2qboz.css';
import '../../css/x/xfac6-bsq.css';
import '../../css/r/rpnamey_h.css';
import '../../css/r/r1qz4mb6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ms5q2qboz"/><path class="xfac6-bsq"/><path class="rpnamey_h"/><path class="r1qz4mb6j"/></g>`,
		"fallback": "fluent-emoji-flat:red-paper-lantern",
	});
}

export default Component;
