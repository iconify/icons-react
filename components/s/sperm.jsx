import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qx451ac5x.css';
import '../../css/s/sq_622bov.css';
import '../../css/r/rp1r7sbyy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIesDJbIM"><g class="rohhhzb0l"><path clip-rule="evenodd" class="qx451ac5x"/><path class="sq_622bov"/><path class="rp1r7sbyy"/></g></mask></defs><path mask="url(#SVGIesDJbIM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sperm",
	});
}

export default Component;
