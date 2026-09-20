import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/aeecnkbfe.css';
import '../../css/w/wlew973ma.css';
import '../../css/m/mc3dr5bbm.css';
import '../../css/u/ujojq53uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="aeecnkbfe"/><path class="wlew973ma"/><path class="mc3dr5bbm"/><path class="ujojq53uu"/></g>`,
		"fallback": "streamline-sharp-color:phone-personal-hotspot",
	});
}

export default Component;
