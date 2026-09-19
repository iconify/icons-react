import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gkuoonbvi.css';
import '../../css/h/hy7c0xbeq.css';
import '../../css/c/czlodr74y.css';
import '../../css/p/pb581_44b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="gkuoonbvi"/><path class="hy7c0xbeq"/><path class="czlodr74y"/><path class="pb581_44b"/></g>`,
		"fallback": "icon-park:recycle-bin",
	});
}

export default Component;
