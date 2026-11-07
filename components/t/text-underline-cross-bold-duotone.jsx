import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/u/u9tzwj7ok.css';
import '../../css/b/bzy5eobti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="u9tzwj7ok"/><path class="bzy5eobti"/>`,
		"fallback": "solar:text-underline-cross-bold-duotone",
	});
}

export default Component;
