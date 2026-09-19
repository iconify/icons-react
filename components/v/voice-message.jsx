import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6skkmbbi.css';
import '../../css/e/esnmy5zcs.css';
import '../../css/b/bosa9ybls.css';
import '../../css/v/v3s_eybff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6skkmbbi"/><path class="esnmy5zcs"/><path class="bosa9ybls"/><path class="v3s_eybff"/></g>`,
		"fallback": "icon-park:voice-message",
	});
}

export default Component;
