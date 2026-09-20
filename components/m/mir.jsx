import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_-xvvo4a.css';

const viewBox = {"width":224,"height":80,"left":36,"top":112};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_-xvvo4a"/>`,
		"fallback": "thesvg:mir",
	});
}

export default Component;
