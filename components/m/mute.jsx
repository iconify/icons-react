import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/i/ic9d4x1qh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2HudpbUt"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="ic9d4x1qh"/></g></mask></defs><path mask="url(#SVG2HudpbUt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mute",
	});
}

export default Component;
