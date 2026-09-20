import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5cnlljnt.css';
import '../../css/v/vp7qox-bo.css';
import '../../css/d/dloivj_8k.css';
import '../../css/u/urrjas0at.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5cnlljnt"/><path class="vp7qox-bo"/><path class="dloivj_8k"/><path class="urrjas0at"/>`,
		"fallback": "streamline-pixel:interface-essential-global-public",
	});
}

export default Component;
