import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9-npja8x.css';
import '../../css/v/v_1e9zypo.css';
import '../../css/r/refjdabcw.css';
import '../../css/l/lbontmtwt.css';
import '../../css/k/km5cwfbyq.css';
import '../../css/z/zfrb92bgc.css';
import '../../css/g/gaew_9bea.css';
import '../../css/q/qgkgg6btv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGAv1zQcQS" cx="121.2" cy="50.2" r="78.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="s9-npja8x"/><stop offset=".85" class="v_1e9zypo"/><stop offset="1" class="v_1e9zypo"/></radialGradient></defs><path class="refjdabcw"/><path class="lbontmtwt"/><path class="km5cwfbyq"/><path fill="url(#SVGAv1zQcQS)" transform="matrix(2.5 0 0 2.5 9.139 -11.571)" class="zfrb92bgc"/><path class="gaew_9bea"/><path class="qgkgg6btv"/>`,
		"fallback": "xero-emoji:shooting-star",
	});
}

export default Component;
