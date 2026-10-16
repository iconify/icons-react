import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhwxisqb.css';
import '../../css/q/qba5qohka.css';
import '../../css/e/ea311acjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhwxisqb"/><path class="qba5qohka"/><path class="ea311acjl"/>`,
		"fallback": "energy-icons:light-switch-48-bold",
	});
}

export default Component;
