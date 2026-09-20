import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjql2tbsq.css';
import '../../css/i/if2h_hcma.css';
import '../../css/k/ki4iswmtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qjql2tbsq"/><path class="if2h_hcma"/><path clip-rule="evenodd" class="ki4iswmtp"/></g>`,
		"fallback": "keyline-icons:scan-search-duotone",
	});
}

export default Component;
