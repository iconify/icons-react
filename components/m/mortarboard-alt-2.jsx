import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sxqdjn4bw.css';
import '../../css/b/b1y6_yydg.css';
import '../../css/t/t-jkcpb1d.css';
import '../../css/f/fl55ggdds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="sxqdjn4bw"/><path class="b1y6_yydg"/><path class="t-jkcpb1d"/><path class="fl55ggdds"/></g>`,
		"fallback": "lets-icons:mortarboard-alt-2",
	});
}

export default Component;
