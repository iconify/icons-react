import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu02f0bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu02f0bmw"/>`,
		"fallback": "vadivam:layers-arrow-up",
	});
}

export default Component;
