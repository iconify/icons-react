import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/l1iy0ffsf.css';
import '../../css/g/gpho4gepl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC4DXYCBl"><g class="v3_i3wktz"><path class="l1iy0ffsf"/><path class="gpho4gepl"/></g></mask></defs><path mask="url(#SVGC4DXYCBl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:umbrella-one",
	});
}

export default Component;
