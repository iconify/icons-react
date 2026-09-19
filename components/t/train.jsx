import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw6nvx_mx.css';
import '../../css/c/cbwjarblr.css';
import '../../css/s/sod_7gkfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iw6nvx_mx"/><circle class="cbwjarblr"/><path class="sod_7gkfc"/>`,
		"fallback": "bx:train",
	});
}

export default Component;
