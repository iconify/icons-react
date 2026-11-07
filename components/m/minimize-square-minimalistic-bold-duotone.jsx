import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/n/n2o26xgfd.css';
import '../../css/j/jeakwob9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="n2o26xgfd"/><path class="jeakwob9h"/>`,
		"fallback": "solar:minimize-square-minimalistic-bold-duotone",
	});
}

export default Component;
