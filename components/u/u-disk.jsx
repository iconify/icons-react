import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/f9ebc66zp.css';
import '../../css/u/uc6h75bkl.css';
import '../../css/h/hvb9uqbww.css';
import '../../css/k/k_4c4kb-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="f9ebc66zp"/><path class="uc6h75bkl"/><path class="hvb9uqbww"/><path class="k_4c4kb-q"/></g>`,
		"fallback": "icon-park:u-disk",
	});
}

export default Component;
