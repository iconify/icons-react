import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qtol5qfed.css';
import '../../css/m/mjwf5pbes.css';
import '../../css/h/hbrh-185r.css';
import '../../css/f/fp8k69iis.css';
import '../../css/p/pzeggsxly.css';
import '../../css/w/wz0qr3bvr.css';
import '../../css/c/c4loz2bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="qtol5qfed"/><rect class="mjwf5pbes"/><path class="hbrh-185r"/><path class="fp8k69iis"/><rect class="pzeggsxly"/><rect class="wz0qr3bvr"/><path class="c4loz2bcc"/></g>`,
		"fallback": "icon-park:network-tree",
	});
}

export default Component;
