import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixcjahbeg.css';
import '../../css/v/v3ts8bbtq.css';
import '../../css/c/cspszkbby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ixcjahbeg"/><path class="v3ts8bbtq"/><path class="cspszkbby"/>`,
		"fallback": "selfhst:piholevault",
	});
}

export default Component;
