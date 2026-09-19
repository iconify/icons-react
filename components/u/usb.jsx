import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg9j1eb8x.css';
import '../../css/v/v71f_-age.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg9j1eb8x"/><path class="v71f_-age"/>`,
		"fallback": "foundation:usb",
	});
}

export default Component;
