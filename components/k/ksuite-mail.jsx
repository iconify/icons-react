import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfjxzhuch.css';
import '../../css/g/gee3w9bni.css';
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
		"content": `<path class="bfjxzhuch"/><path class="gee3w9bni"/><path class="b7vxt34gn"/><path class="kdivkab0n"/>`,
		"fallback": "selfhst:ksuite-mail",
	});
}

export default Component;
