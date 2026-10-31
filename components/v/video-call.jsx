import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y00-2bcfu.css';
import '../../css/n/nwh50xbgo.css';
import '../../css/a/acpl5tr8n.css';
import '../../css/u/u5u1nrlnb.css';
import '../../css/v/vzlu5pbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y00-2bcfu"/><path class="nwh50xbgo wm-shadow"/><path class="acpl5tr8n"/><path class="u5u1nrlnb"/><path class="vzlu5pbte"/></g>`,
		"fallback": "withicons-brutal:video-call",
	});
}

export default Component;
