import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/isai9mbeu.css';
import '../../css/a/azva0wb3h.css';
import '../../css/z/zgn7jc0xl.css';
import '../../css/i/ijkn-8fae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="isai9mbeu"/><path class="azva0wb3h"/><path class="zgn7jc0xl"/><path class="ijkn-8fae"/></g>`,
		"fallback": "icon-park:unlink",
	});
}

export default Component;
