import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nskmalzgz.css';
import '../../css/v/v97u7ccna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nskmalzgz"/><path class="v97u7ccna"/>`,
		"fallback": "pixel:side-nav-collapse",
	});
}

export default Component;
