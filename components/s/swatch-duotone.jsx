import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afaehbegj.css';
import '../../css/i/i75llfsmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afaehbegj"/><path class="i75llfsmf"/></g>`,
		"fallback": "si:swatch-duotone",
	});
}

export default Component;
