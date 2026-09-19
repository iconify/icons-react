import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7zm9qbfi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZZ27B46v"><path class="x7zm9qbfi"/></mask></defs><path mask="url(#SVGZZ27B46v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:puzzle",
	});
}

export default Component;
