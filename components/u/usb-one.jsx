import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sjfe-0i3c.css';
import '../../css/b/bj3s_utsy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqkY9ed0V"><g class="v3_i3wktz"><path class="sjfe-0i3c"/><path class="bj3s_utsy"/></g></mask></defs><path mask="url(#SVGqkY9ed0V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:usb-one",
	});
}

export default Component;
