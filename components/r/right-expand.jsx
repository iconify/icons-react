import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kieu5bcnf.css';
import '../../css/n/ngen0gb1d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5u2Fgb3A"><g class="aql7dnt-u"><rect class="kieu5bcnf"/><path class="ngen0gb1d"/></g></mask></defs><path mask="url(#SVG5u2Fgb3A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:right-expand",
	});
}

export default Component;
