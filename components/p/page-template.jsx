import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/n/nx51ps2-o.css';
import '../../css/w/wsdxj29jq.css';
import '../../css/g/gvcplo0fy.css';
import '../../css/a/a1qr59bcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="nx51ps2-o"/><path class="wsdxj29jq"/><path class="gvcplo0fy"/><path class="a1qr59bcn"/></g>`,
		"fallback": "icon-park:page-template",
	});
}

export default Component;
