import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axs4e-b7g.css';
import '../../css/a/ae1d9obmw.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="axs4e-b7g"/><path class="ae1d9obmw"/><path class="n35dlibfy"/></g>`,
		"fallback": "iconamoon:microphone-off-duotone",
	});
}

export default Component;
