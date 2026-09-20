import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sggwcl_gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sggwcl_gf"/>`,
		"fallback": "pixelarticons:parking",
	});
}

export default Component;
