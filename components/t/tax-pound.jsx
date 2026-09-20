import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hm3biobak.css';
import '../../css/x/x3fzbd_fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hm3biobak"/><path class="x3fzbd_fq"/></g>`,
		"fallback": "tabler:tax-pound",
	});
}

export default Component;
