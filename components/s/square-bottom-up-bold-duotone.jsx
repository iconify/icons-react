import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/d/d-j_pg1wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path clip-rule="evenodd" class="d-j_pg1wi"/>`,
		"fallback": "solar:square-bottom-up-bold-duotone",
	});
}

export default Component;
