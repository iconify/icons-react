import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k4z5r1wzq.css';
import '../../css/s/smf_smbgh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTG4Gvere"><g class="v3_i3wktz"><path class="k4z5r1wzq"/><path class="smf_smbgh"/></g></mask></defs><path mask="url(#SVGTG4Gvere)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:umbrella",
	});
}

export default Component;
