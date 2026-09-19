import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e64hjobsd.css';
import '../../css/k/knrrbxbjz.css';
import '../../css/p/pbkjaxmeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer e64hjobsd"/><path class="duoicon-secondary-layer knrrbxbjz"/><path class="duoicon-primary-layer pbkjaxmeu"/>`,
		"fallback": "duo-icons:lamp-2",
	});
}

export default Component;
