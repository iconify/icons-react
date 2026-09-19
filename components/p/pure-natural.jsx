import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pa6mvv7uc.css';
import '../../css/x/xyj-90bkx.css';
import '../../css/a/as_k_9bns.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOkaP4dbi"><g class="rohhhzb0l"><path class="pa6mvv7uc"/><path class="xyj-90bkx"/><path clip-rule="evenodd" class="as_k_9bns"/></g></mask></defs><path mask="url(#SVGOkaP4dbi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pure-natural",
	});
}

export default Component;
