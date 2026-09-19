import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r-3ti3tas.css';
import '../../css/v/v7tv4gjxm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6G40NcYd"><g class="v3_i3wktz"><path class="r-3ti3tas"/><path class="v7tv4gjxm"/></g></mask></defs><path mask="url(#SVG6G40NcYd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:road-sign",
	});
}

export default Component;
