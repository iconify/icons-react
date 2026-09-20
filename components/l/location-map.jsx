import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hs96w8b5o.css';
import '../../css/v/vdfc60r-c.css';
import '../../css/a/ala74cbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hs96w8b5o"/><path class="vdfc60r-c"/><path class="ala74cbvl"/></g>`,
		"fallback": "streamline-cyber:location-map",
	});
}

export default Component;
