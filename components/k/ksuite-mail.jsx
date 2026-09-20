import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwdmfbbev.css';
import '../../css/i/ibd_t9xaj.css';
import '../../css/b/b7vxt34gn.css';
import '../../css/k/kdivkab0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwdmfbbev"/><path class="ibd_t9xaj"/><path class="b7vxt34gn"/><path class="kdivkab0n"/>`,
		"fallback": "selfhst:ksuite-mail",
	});
}

export default Component;
