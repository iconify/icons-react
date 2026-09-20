import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmx4n2bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmx4n2bax"/>`,
		"fallback": "thesvg-color:pcgamingwiki",
	});
}

export default Component;
