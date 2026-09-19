import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iirtqzb_w.css';
import '../../css/p/p1lghbcur.css';
import '../../css/q/qy_wc_bod.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoNMuJctZ"><g class="aql7dnt-u"><rect class="iirtqzb_w"/><path class="p1lghbcur"/><path class="qy_wc_bod"/></g></mask></defs><path mask="url(#SVGoNMuJctZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:massage-chair",
	});
}

export default Component;
