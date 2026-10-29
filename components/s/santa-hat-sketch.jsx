import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gjvqajwca.css';
import '../../css/y/y5j9z9byl.css';
import '../../css/z/zuj_ibfbz.css';
import '../../css/k/kck4_gd1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gjvqajwca"/><path class="wm-k y5j9z9byl"/><path class="wm-k zuj_ibfbz"/><path class="kck4_gd1h wm-a"/></g>`,
		"fallback": "withicons:santa-hat-sketch",
	});
}

export default Component;
