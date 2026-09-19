import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gh28gsjwe.css';
import '../../css/f/fm_ve5bbr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjj1J1bLL"><g class="v3_i3wktz"><path class="gh28gsjwe"/><path class="fm_ve5bbr"/></g></mask></defs><path mask="url(#SVGjj1J1bLL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:parachute",
	});
}

export default Component;
