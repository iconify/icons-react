import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x_-1fk5qn.css';
import '../../css/u/u1r09_bgv.css';
import '../../css/l/loc2q-8hs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXAla8c4b"><g class="v3_i3wktz"><path class="x_-1fk5qn"/><path class="u1r09_bgv"/><path class="loc2q-8hs"/></g></mask></defs><path mask="url(#SVGXAla8c4b)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sun",
	});
}

export default Component;
