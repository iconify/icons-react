import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk55n3b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk55n3b-f"/>`,
		"fallback": "mdi:language-cpp",
	});
}

export default Component;
