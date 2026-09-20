import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f99k2xbqk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f99k2xbqk"/>`,
		"fallback": "pinhead:person-sitting-on-lifeguard-stand",
	});
}

export default Component;
