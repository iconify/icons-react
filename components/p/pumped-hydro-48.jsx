import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0377flqh.css';
import '../../css/m/mc3iqybwb.css';
import '../../css/z/zxfgagwie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0377flqh"/><path class="mc3iqybwb"/><path class="zxfgagwie"/>`,
		"fallback": "energy-icons:pumped-hydro-48",
	});
}

export default Component;
