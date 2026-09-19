import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6jwrd_9i.css';
import '../../css/f/ffi2c7jam.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 u6jwrd_9i"/><circle class="clr-i-solid clr-i-solid-path-2 ffi2c7jam"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:map-marker-solid",
	});
}

export default Component;
