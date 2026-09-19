import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tt034pnuf.css';
import '../../css/i/iy93embyp.css';
import '../../css/h/h77qjobjk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0QMU2z0O"><g class="aql7dnt-u"><circle class="tt034pnuf"/><circle class="iy93embyp"/><path class="h77qjobjk"/></g></mask></defs><path mask="url(#SVG0QMU2z0O)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:transform",
	});
}

export default Component;
