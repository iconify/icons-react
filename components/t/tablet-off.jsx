import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/b/b1erracoq.css';
import '../../css/g/gd2iygb3r.css';
import '../../css/f/fb7uf6bfd.css';
import '../../css/u/u70iueb1k.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="b1erracoq"/><path clip-rule="evenodd" class="gd2iygb3r"/></g><path clip-rule="evenodd" class="fb7uf6bfd"/><path clip-rule="evenodd" class="u70iueb1k"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:tablet-off",
	});
}

export default Component;
