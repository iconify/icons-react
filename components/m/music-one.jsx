import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/o4_dtfbdv.css';
import '../../css/e/e14b7qcgu.css';
import '../../css/e/e1444ccft.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCFI2PcYZ"><g class="v3_i3wktz"><path class="o4_dtfbdv"/><path class="e14b7qcgu"/><path clip-rule="evenodd" class="e1444ccft"/></g></mask></defs><path mask="url(#SVGCFI2PcYZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:music-one",
	});
}

export default Component;
