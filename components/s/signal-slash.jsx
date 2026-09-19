import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g97w46bwb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g97w46bwb"/>`,
		"fallback": "heroicons-solid:signal-slash",
	});
}

export default Component;
