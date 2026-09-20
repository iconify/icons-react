import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r39ir0bgu.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/l/lrthzwbnd.css';
import '../../css/k/k-1ptgbzj.css';
import '../../css/d/dwr59ybcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r39ir0bgu"/><circle class="h_tsn8bxt"/><path class="lrthzwbnd"/><path class="k-1ptgbzj"/><path class="dwr59ybcn"/></g>`,
		"fallback": "lucide-lab:soccer-pitch",
	});
}

export default Component;
