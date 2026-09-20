import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osyb__p_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osyb__p_z"/>`,
		"fallback": "vadivam:network",
	});
}

export default Component;
