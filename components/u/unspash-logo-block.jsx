import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghx_27s5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ghx_27s5i"/>`,
		"fallback": "streamline-logos:unspash-logo-block",
	});
}

export default Component;
