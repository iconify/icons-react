import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/af13mybgf.css';
import '../../css/b/bz2vyybde.css';
import '../../css/v/vso7ueeoz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG57BX1O8w"><g class="v3_i3wktz"><path class="af13mybgf"/><path class="bz2vyybde"/><path class="vso7ueeoz"/></g></mask></defs><path mask="url(#SVG57BX1O8w)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:multi-rectangle",
	});
}

export default Component;
