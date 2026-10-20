import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0i_5fw8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0i_5fw8y"/>`,
		"fallback": "vadivam:pointer",
	});
}

export default Component;
