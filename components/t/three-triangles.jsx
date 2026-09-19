import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3cnp3bnz.css';
import '../../css/y/yxuosvb0o.css';
import '../../css/c/c18cudbcc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrhIUmdRm"><g class="ft5dv1b6b"><path class="v3cnp3bnz"/><path class="yxuosvb0o"/><path class="c18cudbcc"/></g></mask></defs><path mask="url(#SVGrhIUmdRm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:three-triangles",
	});
}

export default Component;
