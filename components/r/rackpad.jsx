import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgic1j72k.css';
import '../../css/p/pvghoxb6h.css';
import '../../css/g/gdrs0ny1c.css';
import '../../css/u/ujvzqip4o.css';
import '../../css/x/x3w4k13ld.css';
import '../../css/z/zxtgzqbpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgic1j72k"/><path class="pvghoxb6h"/><path class="gdrs0ny1c"/><path class="ujvzqip4o"/><path class="x3w4k13ld"/><path class="zxtgzqbpc"/>`,
		"fallback": "selfhst:rackpad",
	});
}

export default Component;
