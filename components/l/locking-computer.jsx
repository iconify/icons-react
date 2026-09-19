import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hj8fx5rdo.css';
import '../../css/r/rcncnkwrd.css';
import '../../css/o/ojw_40bmw.css';
import '../../css/k/kcwsz79ph.css';
import '../../css/g/g3d0sd4xn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="hj8fx5rdo"/><path class="rcncnkwrd"/><rect class="ojw_40bmw"/><path class="kcwsz79ph"/><path class="g3d0sd4xn"/></g>`,
		"fallback": "icon-park:locking-computer",
	});
}

export default Component;
