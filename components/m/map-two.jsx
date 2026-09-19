import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uzu-zgn4d.css';
import '../../css/y/y4761y4co.css';
import '../../css/r/r9sywpbmq.css';
import '../../css/h/hqqlb8bcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="uzu-zgn4d"/><path class="y4761y4co"/><path class="r9sywpbmq"/><path class="hqqlb8bcv"/></g>`,
		"fallback": "icon-park:map-two",
	});
}

export default Component;
