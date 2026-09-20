import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yaxzcyw0z.css';
import '../../css/h/hl5jo5b4t.css';
import '../../css/b/b-v3dtbhs.css';
import '../../css/f/fc4f7w-7u.css';
import '../../css/p/pwo3r4bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yaxzcyw0z"/><path class="hl5jo5b4t"/><circle class="b-v3dtbhs"/><path class="fc4f7w-7u"/><path class="pwo3r4bdl"/></g>`,
		"fallback": "solar:turntable-music-note-broken",
	});
}

export default Component;
