import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/c/c8mqx_b2z.css';
import '../../css/w/w6quh6bnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf7qNrcCj"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><path clip-rule="evenodd" class="c8mqx_b2z"/><path class="w6quh6bnc"/></g></mask></defs><path mask="url(#SVGf7qNrcCj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:keyboard",
	});
}

export default Component;
