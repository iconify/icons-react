import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d9qv_gtyb.css';
import '../../css/b/bq4cesbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d9qv_gtyb"/><path class="bq4cesbwk"/></g>`,
		"fallback": "iconoir:rings",
	});
}

export default Component;
