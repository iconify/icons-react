import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mekfajc8j.css';
import '../../css/z/zb63x6-2a.css';
import '../../css/h/hryg0ebnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mekfajc8j"/><path class="zb63x6-2a"/><path class="hryg0ebnw"/></g>`,
		"fallback": "tdesign:verify",
	});
}

export default Component;
