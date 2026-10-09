import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/b/b2x5ugbju.css';
import '../../css/i/iz5_bcb-i.css';
import '../../css/h/h-5l_mbfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="b2x5ugbju"/><path class="iz5_bcb-i"/><path class="h-5l_mbfx"/>`,
		"fallback": "energy-icons:volleyball-48",
	});
}

export default Component;
