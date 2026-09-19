import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj9rjo1dz.css';
import '../../css/g/g2ibk0p0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 gj9rjo1dz"/><path class="clr-i-solid clr-i-solid-path-2 g2ibk0p0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:library-solid",
	});
}

export default Component;
