import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mhok5-d7y.css';
import '../../css/d/desq01byb.css';
import '../../css/b/bb9hymbdr.css';
import '../../css/g/gp4-o-pgu.css';
import '../../css/w/w9ex1pb6f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgF4kqdyy"><g class="v3_i3wktz"><path class="mhok5-d7y"/><rect transform="rotate(-30 4.241 15.778)" class="desq01byb"/><path class="bb9hymbdr"/><rect transform="rotate(-30 26.401 34.16)" class="gp4-o-pgu"/><path class="w9ex1pb6f"/></g></mask></defs><path mask="url(#SVGgF4kqdyy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:selfie",
	});
}

export default Component;
