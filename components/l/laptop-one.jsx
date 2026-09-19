import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bl312vbyc.css';
import '../../css/e/e6-_wnblc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHVLLCeHM"><g class="v3_i3wktz"><path class="bl312vbyc"/><path class="e6-_wnblc"/></g></mask></defs><path mask="url(#SVGHVLLCeHM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:laptop-one",
	});
}

export default Component;
