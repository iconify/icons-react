import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y459gbbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y459gbbea"/>`,
		"fallback": "eos-icons:pipeline-outlined",
	});
}

export default Component;
