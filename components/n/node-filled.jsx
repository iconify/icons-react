import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvxc-vbfr.css';
import '../../css/n/nq2wfabsf.css';
import '../../css/i/ishbz4cce.css';
import '../../css/s/sololpbna.css';
import '../../css/r/rt617yb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wvxc-vbfr"/><circle class="nq2wfabsf"/><circle class="ishbz4cce"/><circle class="sololpbna"/><circle class="rt617yb-v"/>`,
		"fallback": "bitcoin-icons:node-filled",
	});
}

export default Component;
