import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz0s3k_1f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz0s3k_1f"/>`,
		"fallback": "devicon-plain:pycharm",
	});
}

export default Component;
