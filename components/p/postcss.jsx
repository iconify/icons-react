import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm5cl11de.css';
import '../../css/c/cc7ygfb5j.css';
import '../../css/l/ljikcn5lw.css';
import '../../css/d/dz18mgexq.css';
import '../../css/g/gnxoapbgo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xm5cl11de"><path class="cc7ygfb5j"/><path class="ljikcn5lw"/><path class="dz18mgexq"/><path class="gnxoapbgo"/></g>`,
		"fallback": "devicon-plain:postcss",
	});
}

export default Component;
