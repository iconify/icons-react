import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sl82esoas.css';
import '../../css/i/i5hbabbqv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMjaQ4bhO"><g class="v3_i3wktz"><path class="sl82esoas"/><path class="i5hbabbqv"/></g></mask></defs><path mask="url(#SVGMjaQ4bhO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:volume-up",
	});
}

export default Component;
