import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xk_cgrbsu.css';
import '../../css/v/vczvbtb_m.css';
import '../../css/l/lag9-94zr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWwSOVBSi"><g class="rohhhzb0l"><circle class="xk_cgrbsu"/><path class="vczvbtb_m"/><path class="lag9-94zr"/></g></mask></defs><path mask="url(#SVGWwSOVBSi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lock-one",
	});
}

export default Component;
