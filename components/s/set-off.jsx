import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wcw_oo5tg.css';
import '../../css/x/xgjnkbdze.css';
import '../../css/i/i-3wzrbog.css';
import '../../css/x/xbnmjoblf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgro8Qb2k"><g class="rohhhzb0l"><path class="wcw_oo5tg"/><path class="xgjnkbdze"/><path class="i-3wzrbog"/><path class="xbnmjoblf"/></g></mask></defs><path mask="url(#SVGgro8Qb2k)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:set-off",
	});
}

export default Component;
