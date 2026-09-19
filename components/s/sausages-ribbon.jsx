import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yos8wob4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yos8wob4y"/>`,
		"fallback": "game-icons:sausages-ribbon",
	});
}

export default Component;
