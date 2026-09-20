import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7nh69bwn.css';
import '../../css/s/s7u_vebis.css';
import '../../css/n/nry7rrf9c.css';
import '../../css/v/vymynu48m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7nh69bwn"/><path class="s7u_vebis"/><path class="nry7rrf9c"/><path class="vymynu48m"/></g>`,
		"fallback": "streamline-ultimate-color:office-file-stamp",
	});
}

export default Component;
