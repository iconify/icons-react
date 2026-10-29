import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u8qk27jdf.css';
import '../../css/k/kpdyd_f9c.css';
import '../../css/c/c3b9ubbke.css';
import '../../css/i/ih7hcfuhc.css';
import '../../css/o/ol7hp6b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u8qk27jdf"/><path class="kpdyd_f9c wm-k"/><path class="c3b9ubbke wm-k"/><path class="ih7hcfuhc wm-a"/><path class="ol7hp6b8d wm-s"/></g>`,
		"fallback": "withicons:teapot-sketch",
	});
}

export default Component;
