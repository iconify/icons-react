import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cor9hjbch.css';
import '../../css/l/lhlk6yb8p.css';
import '../../css/k/kpcmyzith.css';
import '../../css/u/u8nd0acfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cor9hjbch"/><rect class="lhlk6yb8p"/><rect transform="rotate(90 13 18)" class="kpcmyzith"/><rect transform="rotate(90 13 25)" class="u8nd0acfe"/></g>`,
		"fallback": "icon-park-outline:iwatch-two",
	});
}

export default Component;
