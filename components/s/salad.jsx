import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rix1rccmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rix1rccmu"/>`,
		"fallback": "vadivam:salad",
	});
}

export default Component;
