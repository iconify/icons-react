import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/emao1kbkd.css';
import '../../css/m/mzmizbcgi.css';
import '../../css/x/xl7cracwe.css';
import '../../css/i/i9jq-5bdd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="emao1kbkd"/><path clip-rule="evenodd" class="mzmizbcgi"/><path class="xl7cracwe"/><path clip-rule="evenodd" class="i9jq-5bdd"/></g>`,
		"fallback": "healthicons:pills-22x-outline",
	});
}

export default Component;
