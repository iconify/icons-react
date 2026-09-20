import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfcm4db9i.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG9V55xcZL" class="gfcm4db9i"/></defs><g class="ft5dv1b6b"><use href="#SVG9V55xcZL"/><use href="#SVG9V55xcZL" class="av3m8fbrw"/></g>`,
		"fallback": "tdesign:logo-windows",
	});
}

export default Component;
