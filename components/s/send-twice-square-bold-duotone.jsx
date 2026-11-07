import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/f/fvqbw8bkl.css';
import '../../css/h/hcarscc_v.css';
import '../../css/l/lo9yp3b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="fvqbw8bkl"/><path class="hcarscc_v"/><path class="lo9yp3b5r"/>`,
		"fallback": "solar:send-twice-square-bold-duotone",
	});
}

export default Component;
