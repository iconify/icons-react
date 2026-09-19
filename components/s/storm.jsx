import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk87bmbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk87bmbza"/>`,
		"fallback": "humbleicons:storm",
	});
}

export default Component;
