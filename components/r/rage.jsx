import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/t/tcsfyac_a.css';
import '../../css/f/fb_ijtbgm.css';
import '../../css/z/z7iigyukn.css';
import '../../css/w/wlzju0bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="tcsfyac_a"/><path class="fb_ijtbgm"/><path class="z7iigyukn"/><path class="wlzju0bqk"/>`,
		"fallback": "fontisto:rage",
	});
}

export default Component;
