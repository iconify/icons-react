import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0eg7x6yw.css';
import '../../css/z/z60z84bjv.css';
import '../../css/n/nigkucbvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0eg7x6yw"/><path class="z60z84bjv"/><circle class="nigkucbvm"/>`,
		"fallback": "selfhst:sftpgo",
	});
}

export default Component;
