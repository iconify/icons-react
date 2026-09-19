import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7gx_1boq.css';
import '../../css/u/umavbbb4y.css';
import '../../css/u/ur4i7hzho.css';
import '../../css/a/aat705pce.css';
import '../../css/i/ih733h4by.css';
import '../../css/v/v4yyh2bbs.css';
import '../../css/u/u6o8x9sbf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7gx_1boq"/><path class="umavbbb4y"/><path class="ur4i7hzho"/><path class="aat705pce"/><path class="ih733h4by"/><path class="v4yyh2bbs"/><path class="u6o8x9sbf"/></g>`,
		"fallback": "fluent-emoji-flat:railway-track",
	});
}

export default Component;
