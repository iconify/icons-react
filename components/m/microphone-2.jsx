import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn70etb5j.css';
import '../../css/r/rwhirn2vi.css';
import '../../css/y/ygb5cvfor.css';
import '../../css/o/on6asnbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gn70etb5j"/><path class="rwhirn2vi"/><path class="ygb5cvfor"/><path class="on6asnbix"/></g>`,
		"fallback": "tdesign:microphone-2",
	});
}

export default Component;
