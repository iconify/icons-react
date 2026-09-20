import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co3kiq.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/l/l59bcp.css';
import '../../css/e/eeo44p.css';
import '../../css/s/so-from-56.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co3kiq qa-o7h taf2xz"/><path class="l59bcp qa-o7h taf2xz"/><path class="eeo44p qa-o7h"/>`,
		"fallback": "line-md:pencil",
	});
}

export default Component;
