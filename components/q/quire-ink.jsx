import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkufbknyv.css';
import '../../css/s/s7hlo9zxp.css';
import '../../css/g/gbfxncsks.css';
import '../../css/e/eentqmb8a.css';
import '../../css/f/f9ffv5bes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkufbknyv"/><path class="s7hlo9zxp"/><path class="gbfxncsks"/><path class="eentqmb8a"/><path class="f9ffv5bes"/>`,
		"fallback": "selfhst:quire-ink",
	});
}

export default Component;
