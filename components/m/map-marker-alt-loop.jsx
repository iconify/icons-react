import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4yg0k.css';
import '../../css/n/ntj7kf.css';
import '../../css/d/d-jkxijw.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4yg0k"/><circle class="ntj7kf"/>`,
		"fallback": "line-md:map-marker-alt-loop",
	});
}

export default Component;
