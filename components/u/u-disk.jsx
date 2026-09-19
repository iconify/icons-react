import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/ynmj3tykv.css';
import '../../css/p/ppyzrxzkm.css';
import '../../css/v/vv2y0abry.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWqLWpd9A"><g class="rohhhzb0l"><path class="ynmj3tykv"/><path class="ppyzrxzkm"/><path class="vv2y0abry"/></g></mask></defs><path mask="url(#SVGWqLWpd9A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:u-disk",
	});
}

export default Component;
