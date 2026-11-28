import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaf20sbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaf20sbdy"/>`,
		"fallback": "iconaut:link-solid",
	});
}

export default Component;
