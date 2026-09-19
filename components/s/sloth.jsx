import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2kfd13io.css';
import '../../css/c/cq-vgso1z.css';
import '../../css/z/zioz8bc3u.css';
import '../../css/u/um7g9ib3c.css';
import '../../css/s/sd8g3_bjx.css';
import '../../css/s/s2_kd5gwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a2kfd13io"/><path class="cq-vgso1z"/><path class="zioz8bc3u"/><path class="um7g9ib3c"/><path class="sd8g3_bjx"/><path class="s2_kd5gwq"/></g>`,
		"fallback": "fluent-emoji-flat:sloth",
	});
}

export default Component;
