import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/i/i-0o_641g.css';
import '../../css/h/hjnl4zguy.css';
import '../../css/z/zyl4k9yjq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="utf5_xbzs"/><path class="i-0o_641g"/><path class="hjnl4zguy"/><path class="zyl4k9yjq"/></g>`,
		"fallback": "icon-park:upload-three",
	});
}

export default Component;
