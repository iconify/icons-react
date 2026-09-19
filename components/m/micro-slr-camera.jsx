import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8ti2acnt.css';
import '../../css/v/vd0h3zk6v.css';
import '../../css/x/xjhroj3xy.css';
import '../../css/w/wpfp60vke.css';
import '../../css/r/rr7vf1dgr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCCOV3c2I"><g class="ft5dv1b6b"><path class="m8ti2acnt"/><path class="vd0h3zk6v"/><path class="xjhroj3xy"/><path class="wpfp60vke"/><path class="rr7vf1dgr"/></g></mask></defs><path mask="url(#SVGCCOV3c2I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:micro-slr-camera",
	});
}

export default Component;
