import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8ed-o54f.css';
import '../../css/v/v4b_1hbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p8ed-o54f"/><path class="v4b_1hbpn"/></g>`,
		"fallback": "tabler:mail-pin",
	});
}

export default Component;
