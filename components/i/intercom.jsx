import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iivrh9bio.css';
import '../../css/x/xm85kvbbe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpMNVHdBy"><g class="rohhhzb0l"><path class="iivrh9bio"/><path class="xm85kvbbe"/></g></mask></defs><path mask="url(#SVGpMNVHdBy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:intercom",
	});
}

export default Component;
