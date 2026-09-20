import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvtop1btw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ws5p-pbkd.css';
import '../../css/a/a7hvicdlr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG01JF36rt" class="lvtop1btw"/></defs><g class="ft5dv1b6b"><use href="#SVG01JF36rt"/><use href="#SVG01JF36rt"/><path class="ws5p-pbkd"/><path class="a7hvicdlr"/></g>`,
		"fallback": "streamline-plump-color:module-flat",
	});
}

export default Component;
