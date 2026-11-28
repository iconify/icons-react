import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdkv85ljh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdkv85ljh"/>`,
		"fallback": "noviair:tape-measure",
	});
}

export default Component;
