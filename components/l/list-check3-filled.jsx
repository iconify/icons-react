import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgga4ebir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lgga4ebir"/>`,
		"fallback": "reicon:list-check3-filled",
	});
}

export default Component;
