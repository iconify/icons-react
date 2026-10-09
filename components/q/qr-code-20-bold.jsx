import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwd41ubru.css';
import '../../css/r/rp4u3sbxm.css';
import '../../css/g/gfzae_buv.css';
import '../../css/z/zery2jbhk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwd41ubru"/><path class="rp4u3sbxm"/><path class="gfzae_buv"/><path class="zery2jbhk"/>`,
		"fallback": "energy-icons:qr-code-20-bold",
	});
}

export default Component;
