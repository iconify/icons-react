import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u07gqdk2e.css';
import '../../css/b/buahpzh7c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u07gqdk2e"/><path class="buahpzh7c"/>`,
		"fallback": "tabler-flags:vietnam",
	});
}

export default Component;
