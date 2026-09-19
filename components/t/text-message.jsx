import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/v/vtx7wn82i.css';
import '../../css/z/zsp_ecctg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnHaUEbHG"><g class="hv130ab-t"><path class="vtx7wn82i"/><path class="zsp_ecctg"/></g></mask></defs><path mask="url(#SVGnHaUEbHG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:text-message",
	});
}

export default Component;
