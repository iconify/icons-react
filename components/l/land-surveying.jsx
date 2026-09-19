import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/g4iz8vbbj.css';
import '../../css/x/xoigmefmm.css';
import '../../css/w/wj--2_bna.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGG6iAxo0v"><g class="v3_i3wktz"><path class="g4iz8vbbj"/><path class="xoigmefmm"/><path class="wj--2_bna"/></g></mask></defs><path mask="url(#SVGG6iAxo0v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:land-surveying",
	});
}

export default Component;
