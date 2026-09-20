import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2afm7wxp.css';
import '../../css/h/h63osy3wv.css';

const viewBox = {"width":340,"height":340};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z2afm7wxp"/><path class="h63osy3wv"/></g>`,
		"fallback": "material-icon-theme:wakatime",
	});
}

export default Component;
