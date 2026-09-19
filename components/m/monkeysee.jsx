import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph9p3hbni.css';
import '../../css/m/mzc4obb9m.css';
import '../../css/o/obwihtkas.css';
import '../../css/p/p-yajvbte.css';
import '../../css/y/ycnp-c5_c.css';
import '../../css/m/mo44l72mq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ph9p3hbni"/><path class="mzc4obb9m"/><path class="obwihtkas"/><path class="p-yajvbte"/><path class="ycnp-c5_c"/><path class="mo44l72mq"/>`,
		"fallback": "fxemoji:monkeysee",
	});
}

export default Component;
