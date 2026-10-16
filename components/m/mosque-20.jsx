import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glsz6lb6o.css';
import '../../css/l/lkhxdccgi.css';
import '../../css/d/d29tb6b3e.css';
import '../../css/t/t0vmepbiv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glsz6lb6o"/><path class="lkhxdccgi"/><path class="d29tb6b3e"/><path class="t0vmepbiv"/>`,
		"fallback": "energy-icons:mosque-20",
	});
}

export default Component;
