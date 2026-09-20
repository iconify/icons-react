import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9ab1942s.css';
import '../../css/p/ptd7g-bjn.css';
import '../../css/a/ak2xe3bmn.css';
import '../../css/q/qwlxa1blq.css';
import '../../css/e/emoy-abso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d9ab1942s"/><path clip-rule="evenodd" class="ptd7g-bjn"/><path clip-rule="evenodd" class="ak2xe3bmn"/><path clip-rule="evenodd" class="qwlxa1blq"/><path class="emoy-abso"/>`,
		"fallback": "streamline-freehand:touch-id-fingerprint-lock-1",
	});
}

export default Component;
