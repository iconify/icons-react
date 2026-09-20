import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-o7h.css';
import '../../css/z/zntd8k.css';
import '../../css/t/t5zxbs.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9jpx1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-o7h zntd8k"/><path class="qa-o7h t5zxbs"/>`,
		"fallback": "line-md:marker",
	});
}

export default Component;
