import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzxu6cbem.css';
import '../../css/y/y5x_dib_i.css';
import '../../css/b/b6edkyxdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzxu6cbem"/><path class="y5x_dib_i"/><path class="b6edkyxdc"/>`,
		"fallback": "selfhst:microsoft-onedrive-dark",
	});
}

export default Component;
