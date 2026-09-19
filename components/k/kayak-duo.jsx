import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjf9cqe6j.css';
import '../../css/i/i60x8hbxx.css';
import '../../css/f/f0ff_--3f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjf9cqe6j"/><path class="i60x8hbxx"/><path class="f0ff_--3f"/></g>`,
		"fallback": "glyphs:kayak-duo",
	});
}

export default Component;
