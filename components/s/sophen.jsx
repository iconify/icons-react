import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pib_0mbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pib_0mbfg"/>`,
		"fallback": "token:sophen",
	});
}

export default Component;
