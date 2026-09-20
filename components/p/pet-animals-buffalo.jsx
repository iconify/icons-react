import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oem44ybqf.css';
import '../../css/t/t-5uokbzr.css';
import '../../css/b/b9k-ty8do.css';
import '../../css/v/vb30fdm_w.css';
import '../../css/b/bz9yd9bkh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oem44ybqf"/><path class="t-5uokbzr"/><path class="b9k-ty8do"/><path class="vb30fdm_w"/><path class="bz9yd9bkh"/>`,
		"fallback": "streamline-pixel:pet-animals-buffalo",
	});
}

export default Component;
