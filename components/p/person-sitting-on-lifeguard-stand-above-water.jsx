import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ts7v77x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ts7v77x"/>`,
		"fallback": "pinhead:person-sitting-on-lifeguard-stand-above-water",
	});
}

export default Component;
