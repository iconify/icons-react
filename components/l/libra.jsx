import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/r/rx2_hy4ee.css';
import '../../css/c/clafphbkx.css';
import '../../css/v/vtw32zujt.css';
import '../../css/v/v9sgduoqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="rx2_hy4ee"/><path class="clafphbkx"/><path class="vtw32zujt"/><path class="v9sgduoqw"/></g>`,
		"fallback": "icon-park:libra",
	});
}

export default Component;
