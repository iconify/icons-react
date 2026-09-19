import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee9ei2fuh.css';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o-esvy8uf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGAq5dccsu" class="ee9ei2fuh"/><mask id="SVGiZ9C8DHZ"><g class="aql7dnt-u"><use href="#SVGAq5dccsu"/><use href="#SVGAq5dccsu"/><path class="o-esvy8uf"/></g></mask></defs><path mask="url(#SVGiZ9C8DHZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:refraction",
	});
}

export default Component;
