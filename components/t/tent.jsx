import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j3yulqb2k.css';
import '../../css/x/xdrgajgpb.css';
import '../../css/l/loxsdihus.css';
import '../../css/t/tnozr_b6f.css';
import '../../css/n/nbnd6ubzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="j3yulqb2k"/><path class="xdrgajgpb"/><path class="loxsdihus"/><path class="tnozr_b6f"/><path class="nbnd6ubzv"/></g>`,
		"fallback": "icon-park:tent",
	});
}

export default Component;
