import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ukjk5y1zm.css';
import '../../css/r/rrm960bwt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGg1GVtbsw"><g class="rohhhzb0l"><path clip-rule="evenodd" class="ukjk5y1zm"/><path class="rrm960bwt"/></g></mask></defs><path mask="url(#SVGg1GVtbsw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mini-sd-card",
	});
}

export default Component;
