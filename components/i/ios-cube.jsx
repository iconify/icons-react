import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxzshjbvd.css';
import '../../css/p/pd4mgccgx.css';
import '../../css/o/oqp24fb-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxzshjbvd"/><path class="pd4mgccgx"/><path class="oqp24fb-j"/>`,
		"fallback": "ion:ios-cube",
	});
}

export default Component;
