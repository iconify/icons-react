import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vauqdib9h.css';
import '../../css/f/f_e511a-s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vauqdib9h"/><path class="f_e511a-s"/>`,
		"fallback": "streamline-pixel:interface-essential-profile-male",
	});
}

export default Component;
