import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gey7z4w5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gey7z4w5d"/>`,
		"fallback": "file-icons:perl6",
	});
}

export default Component;
