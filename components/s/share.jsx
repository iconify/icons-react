import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jwjqera0w.css';
import '../../css/p/p_-ie5f0h.css';
import '../../css/w/wivnu0x9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jwjqera0w"/><path class="p_-ie5f0h"/><path class="wivnu0x9a"/></g>`,
		"fallback": "icon-park:share",
	});
}

export default Component;
