import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/q_4lxo7cg.css';
import '../../css/v/vxaq4rb_l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY382sdWr"><g class="aql7dnt-u"><path clip-rule="evenodd" class="q_4lxo7cg"/><path class="vxaq4rb_l"/></g></mask></defs><path mask="url(#SVGY382sdWr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:move-in-one",
	});
}

export default Component;
