import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw0cf-x6f.css';
import '../../css/w/wrwp7q77t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gw0cf-x6f"/><path class="wrwp7q77t"/></g>`,
		"fallback": "hugeicons:taxi-02",
	});
}

export default Component;
