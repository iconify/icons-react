import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgic1j72k.css';
import '../../css/p/pvghoxb6h.css';
import '../../css/a/a08ugh7hh.css';
import '../../css/w/wgez2acsd.css';
import '../../css/m/mkumxdvsa.css';
import '../../css/z/zxtgzqbpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgic1j72k"/><path class="pvghoxb6h"/><path class="a08ugh7hh"/><path class="wgez2acsd"/><path class="mkumxdvsa"/><path class="zxtgzqbpc"/>`,
		"fallback": "selfhst:rackpad",
	});
}

export default Component;
