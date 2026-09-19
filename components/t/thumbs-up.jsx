import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dt8jlkbav.css';
import '../../css/a/afpz-89xh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4Xv1gcFj"><g class="v3_i3wktz"><path class="dt8jlkbav"/><path class="afpz-89xh"/></g></mask></defs><path mask="url(#SVG4Xv1gcFj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thumbs-up",
	});
}

export default Component;
