import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr9ub67zs.css';
import '../../css/l/lrrff2bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr9ub67zs"/><path class="lrrff2bpo"/>`,
		"fallback": "uim:signin",
	});
}

export default Component;
