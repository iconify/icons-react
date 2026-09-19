import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx30rb9t.css';
import '../../css/a/adk1a1f8p.css';
import '../../css/y/yx977ubbo.css';
import '../../css/m/my4dskblt.css';
import '../../css/r/r_ykrfbmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btx30rb9t"><path class="adk1a1f8p"/><path class="yx977ubbo"/><path class="my4dskblt"/><path class="r_ykrfbmv"/></g>`,
		"fallback": "icon-park:kungfu",
	});
}

export default Component;
