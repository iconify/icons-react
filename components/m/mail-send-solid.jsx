import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf-dlbakk.css';
import '../../css/l/l_7c63odl.css';
import '../../css/s/srjf_ccfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf-dlbakk"/><path class="l_7c63odl"/><path clip-rule="evenodd" class="srjf_ccfe"/>`,
		"fallback": "streamline-plump:mail-send-solid",
	});
}

export default Component;
