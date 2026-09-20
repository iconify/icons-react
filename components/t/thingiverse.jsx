import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxg05pb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxg05pb6r"/>`,
		"fallback": "thesvg-color:thingiverse",
	});
}

export default Component;
