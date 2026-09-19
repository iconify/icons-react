import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwxsi0iqn.css';
import '../../css/k/kzr7cgbaa.css';
import '../../css/a/akrasacmh.css';
import '../../css/e/eeg43_tpw.css';
import '../../css/a/ax8ltqbtx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kwxsi0iqn"/><path clip-rule="evenodd" class="kzr7cgbaa"/><path class="akrasacmh"/><path clip-rule="evenodd" class="eeg43_tpw"/><path class="ax8ltqbtx"/></g>`,
		"fallback": "glyphs:kiss-wink-heart-outline",
	});
}

export default Component;
