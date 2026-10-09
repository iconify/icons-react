import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nft7035wh.css';
import '../../css/p/pd96bdi8m.css';
import '../../css/u/ujoab5bcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nft7035wh"/><path class="pd96bdi8m"/><path class="ujoab5bcl"/>`,
		"fallback": "energy-icons:scaffolding-48",
	});
}

export default Component;
