import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dvsz9oblk.css';
import '../../css/p/pzopvfbeg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfNfIncUa"><g class="v3_i3wktz"><path class="dvsz9oblk"/><path class="pzopvfbeg"/></g></mask></defs><path mask="url(#SVGfNfIncUa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:screwdriver",
	});
}

export default Component;
