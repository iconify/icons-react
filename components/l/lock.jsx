import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rm2v37f1t.css';
import '../../css/h/h39g81kyw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUQZeRbnh"><g class="v3_i3wktz"><rect class="rm2v37f1t"/><path class="h39g81kyw"/></g></mask></defs><path mask="url(#SVGUQZeRbnh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lock",
	});
}

export default Component;
