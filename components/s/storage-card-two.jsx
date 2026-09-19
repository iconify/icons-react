import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/w/w6ufs9jem.css';
import '../../css/u/uts2ttbfw.css';
import '../../css/s/sunh8ec1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHEPLKWXo"><g class="rohhhzb0l"><rect class="bwpzy-b4l"/><path class="w6ufs9jem"/><path class="uts2ttbfw"/><path class="sunh8ec1l"/></g></mask></defs><path mask="url(#SVGHEPLKWXo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:storage-card-two",
	});
}

export default Component;
