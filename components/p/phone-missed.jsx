import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cptr7so_p.css';
import '../../css/f/fn7ur3xjf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKBR7oeIz"><g class="v3_i3wktz"><path class="cptr7so_p"/><path class="fn7ur3xjf"/></g></mask></defs><path mask="url(#SVGKBR7oeIz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-missed",
	});
}

export default Component;
