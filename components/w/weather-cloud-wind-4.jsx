import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr-vdh1no.css';
import '../../css/k/ks_bexdgf.css';
import '../../css/d/daty13zlt.css';
import '../../css/s/sx5licccz.css';
import '../../css/n/ni8ct25jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr-vdh1no"/><path class="ks_bexdgf"/><path class="daty13zlt"/><path class="sx5licccz"/><path class="ni8ct25jn"/></g>`,
		"fallback": "streamline-ultimate-color:weather-cloud-wind-4",
	});
}

export default Component;
