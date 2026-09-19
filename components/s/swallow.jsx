import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fngjr_1gm.css';
import '../../css/w/wsc1fl-xl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWWivydVe"><g class="v3_i3wktz"><path class="fngjr_1gm"/><path clip-rule="evenodd" class="wsc1fl-xl"/></g></mask></defs><path mask="url(#SVGWWivydVe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:swallow",
	});
}

export default Component;
