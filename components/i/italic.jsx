import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsb7o42fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsb7o42fp"/>`,
		"fallback": "vadivam:italic",
	});
}

export default Component;
