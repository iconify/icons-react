import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvostpb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvostpb5k"/>`,
		"fallback": "thesvg-color:showwcase",
	});
}

export default Component;
