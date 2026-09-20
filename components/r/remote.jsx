import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lri53bb8z.css';
import '../../css/d/dj1p29vfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lri53bb8z"/><path class="dj1p29vfp"/>`,
		"fallback": "pixel:remote",
	});
}

export default Component;
