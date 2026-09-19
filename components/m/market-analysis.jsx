import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/ej4rzcb4e.css';
import '../../css/p/pa8fw9lpr.css';
import '../../css/k/kbwz4fv-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhMLTjd1r"><g class="aql7dnt-u"><path class="ej4rzcb4e"/><path class="pa8fw9lpr"/><path class="kbwz4fv-v"/></g></mask></defs><path mask="url(#SVGhMLTjd1r)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:market-analysis",
	});
}

export default Component;
