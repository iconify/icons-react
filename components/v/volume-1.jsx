import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku849n35d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku849n35d"/>`,
		"fallback": "vadivam:volume-1",
	});
}

export default Component;
