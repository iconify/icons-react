import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k05jl1bpw.css';
import '../../css/y/y4vs7q_0i.css';
import '../../css/c/czp08bbbg.css';
import '../../css/m/mmlid5bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="k05jl1bpw"/><path class="y4vs7q_0i"/><rect class="czp08bbbg"/><path class="mmlid5bet"/></g>`,
		"fallback": "struq:view-list",
	});
}

export default Component;
