import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldvprfbxo.css';
import '../../css/v/v_o86oxzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ldvprfbxo"/><path class="v_o86oxzq"/></g>`,
		"fallback": "hugeicons:robot-01",
	});
}

export default Component;
