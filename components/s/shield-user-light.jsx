import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiqehwiew.css';
import '../../css/w/we_txpblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiqehwiew"/><path class="we_txpblk"/>`,
		"fallback": "stash:shield-user-light",
	});
}

export default Component;
