import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6zwtfsnc.css';
import '../../css/o/oxaibyp_q.css';
import '../../css/s/shojapewv.css';
import '../../css/w/wo9e8-bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="v6zwtfsnc"/><circle class="oxaibyp_q"/><path class="shojapewv"/><path class="wo9e8-bhz"/></g>`,
		"fallback": "lucide:usb",
	});
}

export default Component;
