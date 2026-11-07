import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_r2oob-p.css';
import '../../css/s/spvl3mbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_r2oob-p"/><path class="spvl3mbxz"/>`,
		"fallback": "solar:square-academic-cap-2-outline",
	});
}

export default Component;
