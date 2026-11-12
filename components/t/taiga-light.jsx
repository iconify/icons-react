import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxjnv6btj.css';
import '../../css/o/o78-gg1um.css';
import '../../css/m/mam2srhpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxjnv6btj"/><path class="o78-gg1um"/><path class="mam2srhpb"/>`,
		"fallback": "selfhst:taiga-light",
	});
}

export default Component;
