import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qx-conzms.css';
import '../../css/v/v52ygptow.css';
import '../../css/z/z_d8lcj7j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoxMPfe4c"><g class="aql7dnt-u"><path class="qx-conzms"/><path class="v52ygptow"/><path class="z_d8lcj7j"/></g></mask></defs><path mask="url(#SVGoxMPfe4c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:massage-chair-one",
	});
}

export default Component;
