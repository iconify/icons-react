import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe20_kbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe20_kbxs"/>`,
		"fallback": "thesvg:sqlite",
	});
}

export default Component;
