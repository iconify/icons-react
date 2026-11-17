import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyt5mjbab.css';
import '../../css/x/xr2-xybln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyt5mjbab"/><path class="xr2-xybln"/>`,
		"fallback": "selfhst:solidcraft-light",
	});
}

export default Component;
