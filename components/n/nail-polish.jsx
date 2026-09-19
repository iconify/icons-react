import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cibtkmb-z.css';
import '../../css/t/tl9hr06_y.css';
import '../../css/e/efspjbcxr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIVhBH3TK"><g class="ft5dv1b6b"><path class="cibtkmb-z"/><path class="tl9hr06_y"/><circle class="efspjbcxr"/></g></mask></defs><path mask="url(#SVGIVhBH3TK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nail-polish",
	});
}

export default Component;
