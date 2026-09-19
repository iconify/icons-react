import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k5evs0bcf.css';
import '../../css/r/rz6xoab1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpiGF3bve"><g class="v3_i3wktz"><path class="k5evs0bcf"/><path class="rz6xoab1r"/></g></mask></defs><path mask="url(#SVGpiGF3bve)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:layers",
	});
}

export default Component;
