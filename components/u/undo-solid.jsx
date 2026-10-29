import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjx4p748a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjx4p748a"/>`,
		"fallback": "withicons:undo-solid",
	});
}

export default Component;
