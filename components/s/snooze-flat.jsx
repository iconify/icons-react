import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chdtzrbfi.css';
import '../../css/h/h1booqbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chdtzrbfi"/><path clip-rule="evenodd" class="h1booqbiu"/></g>`,
		"fallback": "streamline-sharp-color:snooze-flat",
	});
}

export default Component;
