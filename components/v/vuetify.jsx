import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aks862b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aks862b7e"/>`,
		"fallback": "simple-icons:vuetify",
	});
}

export default Component;
