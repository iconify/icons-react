import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kma6xtbjg.css';
import '../../css/d/dewcoqb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kma6xtbjg"/><path class="dewcoqb6c"/>`,
		"fallback": "solar:magic-stick-bold-duotone",
	});
}

export default Component;
