import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3mjhacsa.css';
import '../../css/o/odewqcbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3mjhacsa"/><path class="odewqcbbi"/>`,
		"fallback": "token:oni",
	});
}

export default Component;
