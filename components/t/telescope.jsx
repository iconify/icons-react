import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wz99rl-4z.css';
import '../../css/r/rlyoxbbqo.css';
import '../../css/u/u9ff1pb5h.css';
import '../../css/v/vurz7ebdo.css';
import '../../css/k/kc59pekfo.css';
import '../../css/q/qv-m4450j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="wz99rl-4z"/><rect class="rlyoxbbqo"/><path class="u9ff1pb5h"/><path class="vurz7ebdo"/><path class="kc59pekfo"/><path class="qv-m4450j"/></g>`,
		"fallback": "icon-park:telescope",
	});
}

export default Component;
