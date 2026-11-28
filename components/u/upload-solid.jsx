import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg3n12bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg3n12bcy"/>`,
		"fallback": "iconaut:upload-solid",
	});
}

export default Component;
