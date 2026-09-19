import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/d4oyb2wqm.css';
import '../../css/t/tx6iv9bwx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2McFke6e"><g class="v3_i3wktz"><path class="d4oyb2wqm"/><path class="tx6iv9bwx"/></g></mask></defs><path mask="url(#SVG2McFke6e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-outgoing",
	});
}

export default Component;
