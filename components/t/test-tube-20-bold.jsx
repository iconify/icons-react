import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwinbcbgb.css';
import '../../css/l/lzqdc0rqk.css';
import '../../css/y/yepcn_hpj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwinbcbgb"/><path class="lzqdc0rqk"/><path class="yepcn_hpj"/>`,
		"fallback": "energy-icons:test-tube-20-bold",
	});
}

export default Component;
