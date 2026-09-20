import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjg98wbmn.css';
import '../../css/m/m889_pbai.css';
import '../../css/u/uh4pez9bc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjg98wbmn"/><path class="m889_pbai"/><path class="uh4pez9bc"/>`,
		"fallback": "streamline-pixel:interface-essential-flip-vertical-up",
	});
}

export default Component;
