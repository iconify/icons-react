import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icd85j45o.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icd85j45o"/>`,
		"fallback": "fa:paragraph",
	});
}

export default Component;
