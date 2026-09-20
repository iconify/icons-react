import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xsygfyb_v.css';
import '../../css/g/gqknx84un.css';
import '../../css/h/hgd37_xuv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="xsygfyb_v"/><path class="gqknx84un"/><path class="hgd37_xuv"/></g>`,
		"fallback": "marketeq:keyboard-3",
	});
}

export default Component;
