import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4g0fs.css';
import '../../css/q/qa-o7h.css';
import '../../css/l/lbf4zi.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4g0fs qa-o7h"/><path class="lbf4zi qa-o7h"/>`,
		"fallback": "line-md:valign-top",
	});
}

export default Component;
