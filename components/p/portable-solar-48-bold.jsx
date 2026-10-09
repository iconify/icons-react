import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akt-vlbtw.css';
import '../../css/l/lq07xlbfl.css';
import '../../css/h/hlva2pb_n.css';
import '../../css/e/ex_mzw_ak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akt-vlbtw"/><path class="lq07xlbfl"/><path class="hlva2pb_n"/><path class="ex_mzw_ak"/>`,
		"fallback": "energy-icons:portable-solar-48-bold",
	});
}

export default Component;
