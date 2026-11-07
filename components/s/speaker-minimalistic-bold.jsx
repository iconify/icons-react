import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajy_v4bwf.css';
import '../../css/h/h9vo8yb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajy_v4bwf"/><path clip-rule="evenodd" class="h9vo8yb_e"/>`,
		"fallback": "solar:speaker-minimalistic-bold",
	});
}

export default Component;
