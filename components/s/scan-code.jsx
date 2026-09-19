import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r_ktmtjwe.css';
import '../../css/o/o51cz7q6l.css';
import '../../css/u/uj-tbwz8n.css';
import '../../css/h/hf8fe3d2n.css';
import '../../css/e/efkqgnb7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r_ktmtjwe"/><path class="o51cz7q6l"/><path class="uj-tbwz8n"/><path class="hf8fe3d2n"/><path class="efkqgnb7v"/></g>`,
		"fallback": "icon-park:scan-code",
	});
}

export default Component;
