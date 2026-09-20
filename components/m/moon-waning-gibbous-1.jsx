import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onxs8sd7f.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onxs8sd7f"/>`,
		"fallback": "wi:moon-waning-gibbous-1",
	});
}

export default Component;
