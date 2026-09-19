import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vlq958bii.css';
import '../../css/m/mirjr4bon.css';
import '../../css/q/q-73_14rz.css';
import '../../css/v/vw7td_-ft.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLlBR3beH"><g class="v3_i3wktz"><path class="vlq958bii"/><path clip-rule="evenodd" class="mirjr4bon"/><path class="q-73_14rz"/><path class="vw7td_-ft"/></g></mask></defs><path mask="url(#SVGLlBR3beH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trophy",
	});
}

export default Component;
