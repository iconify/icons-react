import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb5440rgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rb5440rgz"/>`,
		"fallback": "solar:suspension-bolt-outline",
	});
}

export default Component;
