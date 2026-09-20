import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjt-15b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjt-15b2x"/>`,
		"fallback": "thesvg-color:rocksdb",
	});
}

export default Component;
