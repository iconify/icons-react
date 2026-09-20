import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4x1bs.css';
import '../../css/n/ntj7kf.css';
import '../../css/d/d-jkxijw.css';
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
		"content": `<path class="s4x1bs"/><circle class="ntj7kf"/>`,
		"fallback": "line-md:map-marker-alt",
	});
}

export default Component;
