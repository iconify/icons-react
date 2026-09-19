import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/itmrxab9d.css';
import '../../css/v/vx5dnby3x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRaVXKb6x"><g class="v3_i3wktz"><path class="itmrxab9d"/><path class="vx5dnby3x"/></g></mask></defs><path mask="url(#SVGRaVXKb6x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thumbs-down",
	});
}

export default Component;
