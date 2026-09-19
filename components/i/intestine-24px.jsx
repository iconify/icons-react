import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m16zfhb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m16zfhb7u"/>`,
		"fallback": "healthicons:intestine-24px",
	});
}

export default Component;
