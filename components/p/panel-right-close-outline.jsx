import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vom0lbury.css';
import '../../css/z/zueniel6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vom0lbury"/><path clip-rule="evenodd" class="zueniel6g"/>`,
		"fallback": "solar:panel-right-close-outline",
	});
}

export default Component;
