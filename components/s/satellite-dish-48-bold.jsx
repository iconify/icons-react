import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpv7zboci.css';
import '../../css/c/chqabwsoe.css';
import '../../css/b/bqkka_ykq.css';
import '../../css/k/kyiokicbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpv7zboci"/><path class="chqabwsoe"/><path class="bqkka_ykq"/><path class="kyiokicbl"/>`,
		"fallback": "energy-icons:satellite-dish-48-bold",
	});
}

export default Component;
