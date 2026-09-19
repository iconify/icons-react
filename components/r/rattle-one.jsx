import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a9kwkr76l.css';
import '../../css/l/lm8wm8y6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle transform="rotate(40 29.463 16.989)" class="a9kwkr76l"/><path class="lm8wm8y6h"/></g>`,
		"fallback": "icon-park-solid:rattle-one",
	});
}

export default Component;
