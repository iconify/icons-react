import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/n9p4rfbbl.css';
import '../../css/a/au8tr4bja.css';
import '../../css/s/s7a4tacdb.css';
import '../../css/r/r-v3lwbom.css';
import '../../css/l/lkxx331-x.css';
import '../../css/m/m92iwibdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="n9p4rfbbl"/><path class="au8tr4bja"/><path class="s7a4tacdb"/><path class="r-v3lwbom"/><path class="lkxx331-x"/><path class="m92iwibdz"/></g>`,
		"fallback": "streamline-sharp-color:pictures-folder-memories",
	});
}

export default Component;
