import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s59zdp_-g.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s59zdp_-g"/>`,
		"fallback": "wi:moon-alt-waxing-crescent-3",
	});
}

export default Component;
