import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osyvgc_mh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osyvgc_mh"/>`,
		"fallback": "file-icons:meson",
	});
}

export default Component;
