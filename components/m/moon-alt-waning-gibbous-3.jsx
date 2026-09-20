import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm6di3box.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm6di3box"/>`,
		"fallback": "wi:moon-alt-waning-gibbous-3",
	});
}

export default Component;
