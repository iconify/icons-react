import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alwctsldn.css';
import '../../css/r/rjutefbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="alwctsldn"/><path class="rjutefbcn"/>`,
		"fallback": "solar:list-check-bold-duotone",
	});
}

export default Component;
