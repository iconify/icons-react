import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz335zj5g.css';
import '../../css/u/ux2qx_n6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz335zj5g"/><path class="ux2qx_n6f"/>`,
		"fallback": "pixel:sound-on-solid",
	});
}

export default Component;
