import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvxfjeb_u.css';
import '../../css/p/pi59231_r.css';
import '../../css/m/m1642jb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvxfjeb_u"/><path class="pi59231_r"/><path clip-rule="evenodd" class="m1642jb7x"/>`,
		"fallback": "qlementine-icons:purcentage-24",
	});
}

export default Component;
