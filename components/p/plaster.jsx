import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv_r68bky.css';
import '../../css/k/kv56fjbco.css';
import '../../css/g/grjrj-bla.css';
import '../../css/a/ax5a02kkg.css';
import '../../css/l/l3i4eyihb.css';
import '../../css/f/fxgmvgblu.css';
import '../../css/d/d8n-it3cl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qv_r68bky"/><rect class="kv56fjbco"/><path class="grjrj-bla"/><circle class="ax5a02kkg"/><circle class="l3i4eyihb"/><circle class="fxgmvgblu"/><circle class="d8n-it3cl"/>`,
		"fallback": "openmoji:plaster",
	});
}

export default Component;
