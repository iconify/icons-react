import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w73fa6bxh.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/l/l4vwo7dma.css';
import '../../css/c/cmg7957jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGYyPHoMWp"><path class="w73fa6bxh"/></clipPath></defs><g clip-path="url(#SVGYyPHoMWp)" transform="translate(-185 -12.5)scale(2.9973)" class="nv9qcacyl"><path class="l4vwo7dma"/><path class="cmg7957jf"/></g>`,
		"fallback": "flag:pw-1x1",
	});
}

export default Component;
