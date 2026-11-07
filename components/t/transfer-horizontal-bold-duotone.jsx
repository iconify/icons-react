import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb8a2xbld.css';
import '../../css/a/auyi_ibtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb8a2xbld"/><path class="auyi_ibtb"/>`,
		"fallback": "solar:transfer-horizontal-bold-duotone",
	});
}

export default Component;
