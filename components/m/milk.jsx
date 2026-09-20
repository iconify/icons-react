import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onzzvobtf.css';
import '../../css/p/pa8umm5tp.css';
import '../../css/a/agzz2togw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="onzzvobtf"/><path class="pa8umm5tp"/><path class="agzz2togw"/></g>`,
		"fallback": "tdesign:milk",
	});
}

export default Component;
