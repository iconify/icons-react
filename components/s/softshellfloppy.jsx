import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlfyfrqop.css';
import '../../css/p/p-dlcqzyg.css';
import '../../css/g/gfz0a8nwo.css';
import '../../css/d/dx5sx9b0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlfyfrqop"/><path class="p-dlcqzyg"/><path class="gfz0a8nwo"/><circle class="dx5sx9b0u"/>`,
		"fallback": "fxemoji:softshellfloppy",
	});
}

export default Component;
