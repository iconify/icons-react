import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pft8d2bkv.css';
import '../../css/w/we6wbhteb.css';
import '../../css/f/fk6vrq42t.css';
import '../../css/g/gm6dav2hm.css';
import '../../css/a/ax2ntcc7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pft8d2bkv wm-k"/><path class="we6wbhteb wm-a"/><path class="fk6vrq42t wm-shadow"/><path class="gm6dav2hm wm-k"/><path class="ax2ntcc7z wm-a"/></g>`,
		"fallback": "withicons:trending-up-engrave",
	});
}

export default Component;
