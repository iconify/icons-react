import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/n79r-0b2c.css';
import '../../css/l/lchlphbxu.css';
import '../../css/p/pv42_gb1e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4rk0GeeZ"><g class="rohhhzb0l"><path class="n79r-0b2c"/><path class="lchlphbxu"/><path class="pv42_gb1e"/></g></mask></defs><path mask="url(#SVG4rk0GeeZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:toilet",
	});
}

export default Component;
