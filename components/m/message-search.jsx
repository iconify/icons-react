import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/to4dkwksy.css';
import '../../css/q/qbow9nb7d.css';
import '../../css/p/pic7lxbxy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLO8kycll"><g class="rohhhzb0l"><path class="to4dkwksy"/><circle class="qbow9nb7d"/><path class="pic7lxbxy"/></g></mask></defs><path mask="url(#SVGLO8kycll)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:message-search",
	});
}

export default Component;
