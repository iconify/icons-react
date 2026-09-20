import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-y-5obbj.css';
import '../../css/n/nnyrt8m0c.css';
import '../../css/e/egsgwgy_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-y-5obbj"/><path class="nnyrt8m0c"/><path class="egsgwgy_r"/>`,
		"fallback": "selfhst:ksuite-swisstransfer-light",
	});
}

export default Component;
