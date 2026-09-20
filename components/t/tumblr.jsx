import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcgz-8zfs.css';
import '../../css/e/e7nh98xpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tcgz-8zfs"/><path class="e7nh98xpn"/>`,
		"fallback": "selfhst:tumblr",
	});
}

export default Component;
