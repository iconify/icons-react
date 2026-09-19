import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sc-c-_bdi.css';
import '../../css/o/olnotz5yy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPRmqlcpn"><g class="v3_i3wktz"><path class="sc-c-_bdi"/><path class="olnotz5yy"/></g></mask></defs><path mask="url(#SVGPRmqlcpn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:wallet-two",
	});
}

export default Component;
