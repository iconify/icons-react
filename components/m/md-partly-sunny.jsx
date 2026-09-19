import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xasqk3bsr.css';
import '../../css/n/n6qmh_e3o.css';
import '../../css/r/rxvy5xtzy.css';
import '../../css/h/h9-n7bb9y.css';
import '../../css/d/dnmo94bwx.css';
import '../../css/j/jiilj-bms.css';
import '../../css/f/fedd21bpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xasqk3bsr"/><path class="n6qmh_e3o"/><path class="rxvy5xtzy"/><path class="h9-n7bb9y"/><path class="dnmo94bwx"/><path class="jiilj-bms"/><path class="fedd21bpj"/>`,
		"fallback": "ion:md-partly-sunny",
	});
}

export default Component;
