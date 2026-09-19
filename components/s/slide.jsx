import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/su1-2fbzp.css';
import '../../css/b/b8e4web8f.css';
import '../../css/d/dvjbylbtm.css';
import '../../css/e/etssapdir.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="su1-2fbzp"/><path class="b8e4web8f"/><path class="dvjbylbtm"/><path class="etssapdir"/></g>`,
		"fallback": "icon-park:slide",
	});
}

export default Component;
