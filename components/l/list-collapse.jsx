import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcynn0b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcynn0b0a"/>`,
		"fallback": "vadivam:list-collapse",
	});
}

export default Component;
