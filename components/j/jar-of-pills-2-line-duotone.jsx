import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt5_hsoex.css';
import '../../css/x/xt3il7bsh.css';
import '../../css/o/o-a468a5k.css';
import '../../css/e/egqi0db6d.css';
import '../../css/a/aqvyvrgse.css';
import '../../css/s/sdzmkabql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lt5_hsoex"/><path class="xt3il7bsh"/><path class="o-a468a5k"/><path class="egqi0db6d"/><path class="aqvyvrgse"/><path class="sdzmkabql"/></g>`,
		"fallback": "solar:jar-of-pills-2-line-duotone",
	});
}

export default Component;
