import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vclgtvb-s.css';
import '../../css/l/ln2abc9qm.css';
import '../../css/h/hrp1nacdz.css';
import '../../css/q/qdl2kvbja.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX83bAeeE"><g class="rohhhzb0l"><path class="vclgtvb-s"/><path class="ln2abc9qm"/><path class="hrp1nacdz"/><path class="qdl2kvbja"/></g></mask></defs><path mask="url(#SVGX83bAeeE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:peach",
	});
}

export default Component;
