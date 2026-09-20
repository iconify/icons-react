import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd-rm_hvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd-rm_hvj"/>`,
		"fallback": "octicon:mute-24",
	});
}

export default Component;
