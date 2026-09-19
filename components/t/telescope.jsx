import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wz99rl-4z.css';
import '../../css/r/rlyoxbbqo.css';
import '../../css/m/mgg7kg_vl.css';
import '../../css/e/enydk0bnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAKOwxd9C"><g class="v3_i3wktz"><rect class="wz99rl-4z"/><rect class="rlyoxbbqo"/><path class="mgg7kg_vl"/><path class="enydk0bnc"/></g></mask></defs><path mask="url(#SVGAKOwxd9C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:telescope",
	});
}

export default Component;
