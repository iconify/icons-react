import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bdotxcbte.css';
import '../../css/w/wopx2abkp.css';
import '../../css/r/rrtdp8m6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGM3iBgaLp"><g class="aql7dnt-u"><path class="bdotxcbte"/><path class="wopx2abkp"/><path class="rrtdp8m6q"/></g></mask></defs><path mask="url(#SVGM3iBgaLp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:repositioning",
	});
}

export default Component;
