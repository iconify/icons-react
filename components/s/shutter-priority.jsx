import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zvkp0cb3v.css';
import '../../css/h/h1rmlkb4z.css';
import '../../css/t/tofdy-80v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTCftzbBY"><g class="v3_i3wktz"><path class="zvkp0cb3v"/><path class="h1rmlkb4z"/><path class="tofdy-80v"/></g></mask></defs><path mask="url(#SVGTCftzbBY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shutter-priority",
	});
}

export default Component;
