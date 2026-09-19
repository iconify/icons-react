import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/s4zvpcc_e.css';
import '../../css/g/gr78cdb7s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcRltieMe"><g class="v3_i3wktz"><path class="s4zvpcc_e"/><path class="gr78cdb7s"/></g></mask></defs><path mask="url(#SVGcRltieMe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:road-sign-both",
	});
}

export default Component;
