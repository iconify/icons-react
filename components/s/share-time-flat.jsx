import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g947ccb3g.css';
import '../../css/p/p112xvj4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g947ccb3g"/><path clip-rule="evenodd" class="p112xvj4i"/></g>`,
		"fallback": "streamline-sharp-color:share-time-flat",
	});
}

export default Component;
