import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/u3yqhguoj.css';
import '../../css/v/van1pxdhn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPzpkEcud"><g class="v3_i3wktz"><path class="u3yqhguoj"/><path class="van1pxdhn"/></g></mask></defs><path mask="url(#SVGPzpkEcud)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:planet",
	});
}

export default Component;
