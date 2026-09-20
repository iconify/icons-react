import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n19_18s0x.css';
import '../../css/e/ee3e3_fof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n19_18s0x"/><path class="ee3e3_fof"/>`,
		"fallback": "streamline-pixel:interface-essential-share-2",
	});
}

export default Component;
