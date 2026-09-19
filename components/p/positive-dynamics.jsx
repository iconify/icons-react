import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/p/p0018ac6k.css';
import '../../css/c/c5449sbbc.css';
import '../../css/w/wu4hlbc_i.css';
import '../../css/p/pnoe_wbur.css';
import '../../css/z/zhyibvb1d.css';
import '../../css/z/zaf-y4bpn.css';
import '../../css/t/tecmf2bxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="p0018ac6k"/><path class="c5449sbbc"/><path class="wu4hlbc_i"/><path class="pnoe_wbur"/><path class="zhyibvb1d"/><path class="zaf-y4bpn"/><path class="tecmf2bxb"/></g>`,
		"fallback": "icon-park:positive-dynamics",
	});
}

export default Component;
