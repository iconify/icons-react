import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pizheebef.css';
import '../../css/u/ui_93yeww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pizheebef"/><path class="ui_93yeww"/>`,
		"fallback": "solar:play-bold-duotone",
	});
}

export default Component;
