import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yar0blewo.css';
import '../../css/q/q1p59-bwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcjPRwd1o"><g class="v3_i3wktz"><path class="yar0blewo"/><path class="q1p59-bwi"/></g></mask></defs><path mask="url(#SVGcjPRwd1o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:music-list",
	});
}

export default Component;
