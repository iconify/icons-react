import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrhks1yem.css';
import '../../css/e/ennyrpbdy.css';
import '../../css/l/lw11p60jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrhks1yem"/><path class="ennyrpbdy"/><path class="lw11p60jl"/>`,
		"fallback": "qlementine-icons:rss-24",
	});
}

export default Component;
