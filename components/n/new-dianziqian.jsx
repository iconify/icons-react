import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_sapzgjq.css';
import '../../css/v/vnc4azbcg.css';
import '../../css/s/s12queb_a.css';
import '../../css/x/x0winr6kg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGR7zwdepN"><g class="ft5dv1b6b"><path class="y_sapzgjq"/><path class="vnc4azbcg"/><path class="s12queb_a"/><path class="x0winr6kg"/></g></mask></defs><path mask="url(#SVGR7zwdepN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:new-dianziqian",
	});
}

export default Component;
