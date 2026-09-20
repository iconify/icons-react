import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfo1tsbjl.css';
import '../../css/p/pz67xgbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfo1tsbjl"/><path class="pz67xgbrp"/>`,
		"fallback": "tdesign:patio-filled",
	});
}

export default Component;
