import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_6h9nbwv.css';
import '../../css/c/cd9fujbkr.css';
import '../../css/u/u581sr0wm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqPZNEceL"><g class="ft5dv1b6b"><path class="a_6h9nbwv"/><path class="cd9fujbkr"/><path class="u581sr0wm"/></g></mask></defs><path mask="url(#SVGqPZNEceL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:strongbox",
	});
}

export default Component;
