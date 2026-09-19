import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shnz9ibvv.css';
import '../../css/h/hw3-26p2q.css';
import '../../css/g/gg6l8vb8h.css';
import '../../css/k/k3vk57b-j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shnz9ibvv"/><path class="hw3-26p2q"/><path class="gg6l8vb8h"/><path class="k3vk57b-j"/></g>`,
		"fallback": "glyphs:school-bus-duo",
	});
}

export default Component;
