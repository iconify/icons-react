import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3jg7nbdr.css';
import '../../css/x/xsl56zbwo.css';
import '../../css/x/x03t-495s.css';
import '../../css/n/n8ihr8b9o.css';
import '../../css/s/sf6sntbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o3jg7nbdr wm-k"/><path class="wm-s xsl56zbwo"/><path class="wm-shadow x03t-495s"/><path class="n8ihr8b9o wm-k"/><path class="sf6sntbpn wm-s"/></g>`,
		"fallback": "withicons:phone-incoming-engrave",
	});
}

export default Component;
