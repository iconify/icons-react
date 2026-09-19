import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6ggdkgof.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6ggdkgof"/>`,
		"fallback": "garden:relationshape-connect-26",
	});
}

export default Component;
