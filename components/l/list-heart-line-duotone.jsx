import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zziv607bu.css';
import '../../css/y/ynnqgt8sp.css';
import '../../css/r/rhlnpmbpq.css';
import '../../css/m/mlijwm2tw.css';
import '../../css/k/k35jqkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zziv607bu"/><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="mlijwm2tw"/><path class="k35jqkb4g"/></g>`,
		"fallback": "solar:list-heart-line-duotone",
	});
}

export default Component;
