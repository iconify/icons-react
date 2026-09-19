import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v2d09-zvp.css';
import '../../css/w/w-mxnd3nu.css';
import '../../css/m/mdbt_xbjk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjQPZ6cCO"><g class="rohhhzb0l"><path class="v2d09-zvp"/><path class="w-mxnd3nu"/><circle transform="rotate(-180 37.176 10)" class="mdbt_xbjk"/></g></mask></defs><path mask="url(#SVGjQPZ6cCO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:s-turn-right",
	});
}

export default Component;
