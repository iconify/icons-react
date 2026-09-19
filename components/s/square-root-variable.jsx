import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnqm5757s.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnqm5757s"/>`,
		"fallback": "fa6-solid:square-root-variable",
	});
}

export default Component;
