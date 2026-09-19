import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc41xub6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc41xub6b"/>`,
		"fallback": "grommet-icons:subtract-circle",
	});
}

export default Component;
