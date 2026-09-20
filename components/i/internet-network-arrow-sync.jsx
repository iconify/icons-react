import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5brnbbhv.css';
import '../../css/v/vwa8do-ok.css';
import '../../css/i/i88vk8anl.css';
import '../../css/k/kah05bc0t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5brnbbhv"/><path class="vwa8do-ok"/><path class="i88vk8anl"/><path class="kah05bc0t"/>`,
		"fallback": "streamline-pixel:internet-network-arrow-sync",
	});
}

export default Component;
