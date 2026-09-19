import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvr2oubro.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvr2oubro"/>`,
		"fallback": "fontisto:sass",
	});
}

export default Component;
