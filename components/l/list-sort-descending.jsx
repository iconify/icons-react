import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mepfk3yoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mepfk3yoz"/>`,
		"fallback": "vadivam:list-sort-descending",
	});
}

export default Component;
