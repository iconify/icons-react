import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm3dusb_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm3dusb_d"/>`,
		"fallback": "maki:roadblock-15",
	});
}

export default Component;
