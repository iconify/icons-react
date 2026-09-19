import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9639ubdc.css';
import '../../css/r/r9hltrbzo.css';
import '../../css/q/qx1a70s3d.css';
import '../../css/a/axn1pzbjv.css';
import '../../css/y/ykhkgk-ul.css';
import '../../css/h/hjx4b3_hq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9639ubdc"/><path class="r9hltrbzo"/><path class="qx1a70s3d"/><path class="axn1pzbjv"/><path class="ykhkgk-ul"/><path class="hjx4b3_hq"/>`,
		"fallback": "fxemoji:tram",
	});
}

export default Component;
