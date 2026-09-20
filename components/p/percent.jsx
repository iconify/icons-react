import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amxs67rqb.css';
import '../../css/t/ty7516ydb.css';
import '../../css/t/t_f65iten.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="amxs67rqb"/><circle class="ty7516ydb"/><circle class="t_f65iten"/></g>`,
		"fallback": "majesticons:percent",
	});
}

export default Component;
