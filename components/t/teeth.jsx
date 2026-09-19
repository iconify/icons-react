import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz4ox_b4v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz4ox_b4v"/>`,
		"fallback": "fa7-solid:teeth",
	});
}

export default Component;
