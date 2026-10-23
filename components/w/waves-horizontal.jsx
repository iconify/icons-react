import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkpd7_b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkpd7_b_f"/>`,
		"fallback": "vadivam:waves-horizontal",
	});
}

export default Component;
