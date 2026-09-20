import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkufbknyv.css';
import '../../css/m/mb2o3qbdg.css';
import '../../css/g/g1jdu73ab.css';
import '../../css/e/eentqmb8a.css';
import '../../css/p/pq5g1621a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkufbknyv"/><path class="mb2o3qbdg"/><path class="g1jdu73ab"/><path class="eentqmb8a"/><path class="pq5g1621a"/>`,
		"fallback": "selfhst:quire-ink",
	});
}

export default Component;
