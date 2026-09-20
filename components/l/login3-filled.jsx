import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abqt2_evv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abqt2_evv"/>`,
		"fallback": "reicon:login3-filled",
	});
}

export default Component;
