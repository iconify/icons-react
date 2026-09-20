import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k75k9-z_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k75k9-z_d"/>`,
		"fallback": "qlementine-icons:ukulele-24",
	});
}

export default Component;
