import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/tjouc0b_d.css';
import '../../css/q/q37jtebrq.css';
import '../../css/n/n92m255cp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiadf66wv"><g class="rohhhzb0l"><path clip-rule="evenodd" class="tjouc0b_d"/><path class="q37jtebrq"/><path class="n92m255cp"/></g></mask></defs><path mask="url(#SVGiadf66wv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mask",
	});
}

export default Component;
