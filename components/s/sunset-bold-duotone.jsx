import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h21hmgjli.css';
import '../../css/y/yf47oi66y.css';
import '../../css/y/yo1r0wryd.css';
import '../../css/x/xr17mbc7i.css';
import '../../css/m/m3ri2hldy.css';
import '../../css/m/m92kipbfc.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kro1k9yfy.css';
import '../../css/r/rl-y5taac.css';
import '../../css/m/m411t7grf.css';
import '../../css/o/o5kqiel1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h21hmgjli"/><path class="yf47oi66y"/><path class="yo1r0wryd"/><path class="xr17mbc7i"/><path class="m3ri2hldy"/><path class="m92kipbfc"/><g class="xtpeb-edw"><path class="kro1k9yfy"/><path class="rl-y5taac"/><path class="m411t7grf"/><path class="o5kqiel1h"/></g>`,
		"fallback": "solar:sunset-bold-duotone",
	});
}

export default Component;
