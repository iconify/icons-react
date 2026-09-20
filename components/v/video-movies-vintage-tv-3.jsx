import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxs9kibnt.css';
import '../../css/g/gvn1ulafh.css';
import '../../css/q/qcrc8mb7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxs9kibnt"/><path class="gvn1ulafh"/><path class="qcrc8mb7w"/>`,
		"fallback": "streamline-pixel:video-movies-vintage-tv-3",
	});
}

export default Component;
