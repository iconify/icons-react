import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tyc3wod7f.css';
import '../../css/b/bn-fczxak.css';
import '../../css/u/uc23p5bxt.css';
import '../../css/l/lwtwrjtki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tyc3wod7f wm-k"/><path class="bn-fczxak wm-a"/><path class="uc23p5bxt wm-k"/><path class="lwtwrjtki wm-a"/></g>`,
		"fallback": "withicons:rainbow-sketch",
	});
}

export default Component;
