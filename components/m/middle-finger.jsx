import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/m/mpeuit2qe.css';
import '../../css/u/uv1zd2b2b.css';
import '../../css/v/vawf-rboz.css';
import '../../css/l/l4z9zzgzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="mpeuit2qe"/><path class="uv1zd2b2b"/><path class="vawf-rboz"/><path class="l4z9zzgzz"/></g>`,
		"fallback": "icon-park-outline:middle-finger",
	});
}

export default Component;
