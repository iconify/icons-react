import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfb1oggrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfb1oggrc"/>`,
		"fallback": "reicon:three-d-cube",
	});
}

export default Component;
