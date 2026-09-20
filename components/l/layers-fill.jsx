import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdkgnbbwr.css';
import '../../css/l/lcfo21bnz.css';
import '../../css/k/kfdgnyb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdkgnbbwr"/><path clip-rule="evenodd" class="lcfo21bnz"/><path clip-rule="evenodd" class="kfdgnyb-h"/>`,
		"fallback": "lets-icons:layers-fill",
	});
}

export default Component;
