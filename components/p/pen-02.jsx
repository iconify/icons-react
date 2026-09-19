import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wfz_u94ru.css';
import '../../css/d/dfknjvb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wfz_u94ru"/><path class="dfknjvb-e"/></g>`,
		"fallback": "hugeicons:pen-02",
	});
}

export default Component;
