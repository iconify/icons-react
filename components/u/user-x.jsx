import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9p0gb1ju.css';
import '../../css/z/zpbr4rbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k9p0gb1ju"/><circle class="zpbr4rbfi"/></g>`,
		"fallback": "hugeicons:user-x",
	});
}

export default Component;
