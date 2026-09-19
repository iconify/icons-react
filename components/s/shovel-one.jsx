import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/p/ppp-0h--y.css';
import '../../css/s/sv6uwwbpt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb6ieSbiR"><g class="hv130ab-t"><path class="ppp-0h--y"/><path class="sv6uwwbpt"/></g></mask></defs><path mask="url(#SVGb6ieSbiR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shovel-one",
	});
}

export default Component;
