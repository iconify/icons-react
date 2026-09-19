import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/e8vw6-0ba.css';
import '../../css/a/a_r8tk11v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEyxHnena"><g class="rohhhzb0l"><circle class="e8vw6-0ba"/><path class="a_r8tk11v"/></g></mask></defs><path mask="url(#SVGEyxHnena)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:taurus",
	});
}

export default Component;
