import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s3ssyfbdv.css';
import '../../css/u/uhqc7ibzm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="s3ssyfbdv"/><path class="uhqc7ibzm"/></g>`,
		"fallback": "marketeq:mosque",
	});
}

export default Component;
