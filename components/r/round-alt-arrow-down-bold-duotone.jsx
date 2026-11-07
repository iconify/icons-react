import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghfixm1dc.css';
import '../../css/j/jq-gf3byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghfixm1dc"/><path class="jq-gf3byy"/>`,
		"fallback": "solar:round-alt-arrow-down-bold-duotone",
	});
}

export default Component;
