import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqc8o1i9f.css';
import '../../css/l/lu22ebasm.css';
import '../../css/k/kjoytpkfo.css';
import '../../css/g/gxybq3bmw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oqc8o1i9f"/><path class="lu22ebasm"/><path clip-rule="evenodd" class="kjoytpkfo"/><path clip-rule="evenodd" class="gxybq3bmw"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:photo-off",
	});
}

export default Component;
