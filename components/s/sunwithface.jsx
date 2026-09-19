import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guaobubus.css';
import '../../css/i/i4xsl43pg.css';
import '../../css/y/y0aa2db-h.css';
import '../../css/q/q811zrblc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guaobubus"/><circle class="i4xsl43pg"/><path class="y0aa2db-h"/><path class="q811zrblc"/>`,
		"fallback": "fxemoji:sunwithface",
	});
}

export default Component;
