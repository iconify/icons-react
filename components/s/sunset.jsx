import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gbimlmb-h.css';
import '../../css/l/l6ojcfqux.css';
import '../../css/i/ivveyo7zc.css';
import '../../css/x/xbd1jzblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjPNMVbfl" x1="9" x2="15" y1="1.52" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGjPNMVbfl)" class="gbimlmb-h"/><path class="l6ojcfqux wm-a"/><path class="ivveyo7zc wm-s"/><path class="wm-shine xbd1jzblb"/></g>`,
		"fallback": "withicons-utsav:sunset",
	});
}

export default Component;
