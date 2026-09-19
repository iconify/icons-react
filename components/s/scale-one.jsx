import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dki2qy46y.css';
import '../../css/x/xjr1w6faa.css';
import '../../css/x/x1pn6ebie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJQGaudKX"><g class="v3_i3wktz"><path class="dki2qy46y"/><path class="xjr1w6faa"/><path class="x1pn6ebie"/></g></mask></defs><path mask="url(#SVGJQGaudKX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:scale-one",
	});
}

export default Component;
