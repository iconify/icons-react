import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oixycubyj.css';
import '../../css/t/tmbuc6btd.css';
import '../../css/v/vhjlelb7g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oixycubyj"/><path class="tmbuc6btd"/><path class="vhjlelb7g"/></g>`,
		"fallback": "glyphs:light-switch-duo",
	});
}

export default Component;
