import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rzkc8ryte.css';
import '../../css/y/y785qmzpn.css';
import '../../css/f/fif1ehbkk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlwsRHVWn"><g class="v3_i3wktz"><path clip-rule="evenodd" class="rzkc8ryte"/><path class="y785qmzpn"/><path class="fif1ehbkk"/></g></mask></defs><path mask="url(#SVGlwsRHVWn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ship",
	});
}

export default Component;
