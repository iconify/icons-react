import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufz7ezfi.css';
import '../../css/n/n1e5tdbro.css';
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
		"content": `<defs><path id="SVG4dQmpEDk" class="pufz7ezfi"/><path id="SVGZf3U7bMu" class="n1e5tdbro"/></defs><g class="ft5dv1b6b"><use href="#SVG4dQmpEDk"/><use href="#SVGZf3U7bMu"/><use href="#SVGZf3U7bMu" class="av3m8fbrw"/><use href="#SVG4dQmpEDk" class="av3m8fbrw"/></g>`,
		"fallback": "tdesign:support",
	});
}

export default Component;
