import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsfp_ybjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsfp_ybjx"/>`,
		"fallback": "vadivam:user-cog",
	});
}

export default Component;
