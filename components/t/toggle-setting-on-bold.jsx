import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9uy6eb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9uy6eb1f"/>`,
		"fallback": "streamline-ultimate:toggle-setting-on-bold",
	});
}

export default Component;
