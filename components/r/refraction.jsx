import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcih8ij8j.css';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o-esvy8uf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGpjjbzJlK" class="lcih8ij8j"/></defs><g class="nz_20wbpz"><use href="#SVGpjjbzJlK"/><use href="#SVGpjjbzJlK"/><path class="o-esvy8uf"/></g>`,
		"fallback": "icon-park-solid:refraction",
	});
}

export default Component;
