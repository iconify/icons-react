import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/aa0t2xbcb.css';
import '../../css/x/xzlyzjegv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG760hUdTG"><g class="rohhhzb0l"><path class="aa0t2xbcb"/><path class="xzlyzjegv"/></g></mask></defs><path mask="url(#SVG760hUdTG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lemon",
	});
}

export default Component;
