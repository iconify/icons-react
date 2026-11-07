import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/k/k5s-t1b0l.css';
import '../../css/a/augjxln2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="k5s-t1b0l"/><path class="augjxln2c"/>`,
		"fallback": "solar:programming-bold-duotone",
	});
}

export default Component;
