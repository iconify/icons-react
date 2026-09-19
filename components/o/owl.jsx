import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/f_i-55w-x.css';
import '../../css/k/kl6xp4spr.css';
import '../../css/a/a31hkfdiu.css';
import '../../css/i/iahmlcbgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="f_i-55w-x"/><path class="kl6xp4spr"/><circle class="a31hkfdiu"/><circle class="iahmlcbgz"/></g>`,
		"fallback": "icon-park:owl",
	});
}

export default Component;
