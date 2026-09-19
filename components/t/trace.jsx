import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/w14uhobpy.css';
import '../../css/y/yltrj23_b.css';
import '../../css/x/x94m28bkr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSuWPfc9M"><g class="v3_i3wktz"><path class="w14uhobpy"/><path class="yltrj23_b"/><path class="x94m28bkr"/></g></mask></defs><path mask="url(#SVGSuWPfc9M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trace",
	});
}

export default Component;
