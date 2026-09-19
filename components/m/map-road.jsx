import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kca82-bbm.css';
import '../../css/p/pl_657gxa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFawpXbsf"><g class="v3_i3wktz"><path class="kca82-bbm"/><path class="pl_657gxa"/></g></mask></defs><path mask="url(#SVGFawpXbsf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:map-road",
	});
}

export default Component;
