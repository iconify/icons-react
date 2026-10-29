import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2j9agbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2j9agbco"/>`,
		"fallback": "withicons:user-solid",
	});
}

export default Component;
