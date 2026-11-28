import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gguu4r_oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gguu4r_oa"/>`,
		"fallback": "iconaut:number-4-duo",
	});
}

export default Component;
