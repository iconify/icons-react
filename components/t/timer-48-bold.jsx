import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj6hokfdk.css';
import '../../css/l/lhcx5mbkv.css';
import '../../css/x/xjhjt_0rm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj6hokfdk"/><path class="lhcx5mbkv"/><path class="xjhjt_0rm"/>`,
		"fallback": "energy-icons:timer-48-bold",
	});
}

export default Component;
