import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud2q-obza.css';
import '../../css/z/zb7vgmb5u.css';
import '../../css/u/uywxzgm7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud2q-obza"/><path class="zb7vgmb5u"/><path class="uywxzgm7w"/>`,
		"fallback": "selfhst:watchtower-dark",
	});
}

export default Component;
