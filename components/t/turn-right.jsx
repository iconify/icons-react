import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/hg47tl.css';
import '../../css/b/blypte.css';
import '../../css/s/so-from-24.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c hg47tl"/><path class="a0m25c blypte"/>`,
		"fallback": "line-md:turn-right",
	});
}

export default Component;
