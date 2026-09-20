import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvsi7hbga.css';
import '../../css/t/tpm5z5nfs.css';
import '../../css/p/p60cc0byq.css';
import '../../css/n/nrd2wggzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zvsi7hbga"/><path class="tpm5z5nfs"/><rect class="p60cc0byq"/><path class="nrd2wggzr"/></g>`,
		"fallback": "lets-icons:server-duotone",
	});
}

export default Component;
