import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp4_c_vog.css';
import '../../css/p/pswt3mbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp4_c_vog"/><path clip-rule="evenodd" class="pswt3mbkl"/>`,
		"fallback": "stash:sun-solid",
	});
}

export default Component;
