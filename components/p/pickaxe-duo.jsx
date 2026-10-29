import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o0lv7fb0z.css';
import '../../css/i/ibvzxbc8p.css';
import '../../css/x/x-m_43jif.css';
import '../../css/u/urjdred5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o0lv7fb0z"/><path class="ibvzxbc8p wm-a"/><path class="x-m_43jif"/><path class="urjdred5d wm-a"/></g>`,
		"fallback": "withicons:pickaxe-duo",
	});
}

export default Component;
