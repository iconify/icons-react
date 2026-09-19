import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl4zunb3c.css';
import '../../css/a/araz-lb3i.css';
import '../../css/q/q2vfgq-lo.css';
import '../../css/v/vgv8dh9lu.css';
import '../../css/z/ztvvpvise.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl4zunb3c"/><path class="araz-lb3i"/><circle class="q2vfgq-lo"/><path class="vgv8dh9lu"/><path class="ztvvpvise"/>`,
		"fallback": "fxemoji:television",
	});
}

export default Component;
