import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ynqx2zfnc.css';
import '../../css/o/odhm74bfl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd09YJeLr"><g class="v3_i3wktz"><path class="ynqx2zfnc"/><path class="odhm74bfl"/></g></mask></defs><path mask="url(#SVGd09YJeLr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:send-backward",
	});
}

export default Component;
