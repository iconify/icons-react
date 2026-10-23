import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvbsrhv9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvbsrhv9q"/>`,
		"fallback": "vadivam:panel-top-bottom-dashed",
	});
}

export default Component;
