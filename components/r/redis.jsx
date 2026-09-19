import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__43in4h.css';
import '../../css/u/ub90ksf3r.css';
import '../../css/v/vi2s80h4t.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a__43in4h"/><path class="ub90ksf3r"/><path class="vi2s80h4t"/>`,
		"fallback": "fontisto:redis",
	});
}

export default Component;
