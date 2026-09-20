import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgazdabtx.css';
import '../../css/w/w4qmzgbaj.css';
import '../../css/g/gkmoivbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fgazdabtx"/><path clip-rule="evenodd" class="w4qmzgbaj"/><path class="gkmoivbbn"/></g>`,
		"fallback": "streamline-sharp-color:play-list-8-flat",
	});
}

export default Component;
