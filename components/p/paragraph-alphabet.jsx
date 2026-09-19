import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqyla2b2h.css';
import '../../css/i/iq4xuabkk.css';
import '../../css/s/sh_hm59tu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV463idEB"><g class="ft5dv1b6b"><path class="aqyla2b2h"/><path class="iq4xuabkk"/><path class="sh_hm59tu"/></g></mask></defs><path mask="url(#SVGV463idEB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paragraph-alphabet",
	});
}

export default Component;
