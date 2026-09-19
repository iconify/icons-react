import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb-tdob4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb-tdob4r"/>`,
		"fallback": "fontisto:radio-btn-active",
	});
}

export default Component;
