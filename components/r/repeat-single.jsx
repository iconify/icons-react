import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/w/wp8azu9by.css';
import '../../css/k/knweaaczo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="wp8azu9by"/><path class="knweaaczo"/></g>`,
		"fallback": "streamline-sharp-color:repeat-single",
	});
}

export default Component;
