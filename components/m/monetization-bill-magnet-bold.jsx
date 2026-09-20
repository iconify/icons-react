import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyvs0_bhq.css';
import '../../css/k/k7rffrm2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyvs0_bhq"/><path class="k7rffrm2v"/>`,
		"fallback": "streamline-ultimate:monetization-bill-magnet-bold",
	});
}

export default Component;
