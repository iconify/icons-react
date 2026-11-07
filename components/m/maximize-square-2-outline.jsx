import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdva5qsyp.css';
import '../../css/j/jwcaxlbam.css';
import '../../css/k/kll7rqb_y.css';
import '../../css/z/zpih-bbov.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdva5qsyp"/><path class="jwcaxlbam"/><path class="kll7rqb_y"/><path class="zpih-bbov"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:maximize-square-2-outline",
	});
}

export default Component;
