import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztur-t_2p.css';
import '../../css/n/nqiw-hxzo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGedoEBbPO"><g class="ft5dv1b6b"><path class="ztur-t_2p"/><path class="nqiw-hxzo"/></g></mask></defs><path mask="url(#SVGedoEBbPO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:server",
	});
}

export default Component;
