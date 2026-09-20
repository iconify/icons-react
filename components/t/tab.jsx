import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7jvsr74d.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/t/t9_1hpbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGlJx6pd9R" class="e7jvsr74d"/></defs><g class="ft5dv1b6b"><use href="#SVGlJx6pd9R"/><use href="#SVGlJx6pd9R" class="av3m8fbrw"/><path class="t9_1hpbui"/></g>`,
		"fallback": "tdesign:tab",
	});
}

export default Component;
