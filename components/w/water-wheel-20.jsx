import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmwikhbug.css';
import '../../css/e/ekooj0b0b.css';
import '../../css/b/bvbkw3bso.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmwikhbug"/><path class="ekooj0b0b"/><path class="bvbkw3bso"/>`,
		"fallback": "energy-icons:water-wheel-20",
	});
}

export default Component;
