import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z13kozbdm.css';
import '../../css/p/pgi2m3pns.css';
import '../../css/j/jgpp58bkm.css';
import '../../css/h/hztu6308b.css';
import '../../css/j/jomfpjb3e.css';
import '../../css/k/kj8rtbbtk.css';
import '../../css/q/qih5y2_im.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 5 42)" class="z13kozbdm"/><path class="pgi2m3pns"/><circle class="jgpp58bkm"/><circle class="hztu6308b"/><circle class="jomfpjb3e"/><path class="kj8rtbbtk"/><path class="qih5y2_im"/></g>`,
		"fallback": "icon-park:tickets-one",
	});
}

export default Component;
