import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s86v7ljxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s86v7ljxc"/>`,
		"fallback": "reicon:suspension",
	});
}

export default Component;
