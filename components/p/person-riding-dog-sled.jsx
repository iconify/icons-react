import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo6ivfpgc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo6ivfpgc"/>`,
		"fallback": "pinhead:person-riding-dog-sled",
	});
}

export default Component;
