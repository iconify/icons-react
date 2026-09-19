import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkehcvu9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkehcvu9h"/>`,
		"fallback": "heroicons:signal-slash",
	});
}

export default Component;
