import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf7q6ji8c.css';
import '../../css/f/fvnxa3bsu.css';
import '../../css/m/mi_58-bbi.css';
import '../../css/l/leai81bxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf7q6ji8c"/><path class="fvnxa3bsu"/><path class="mi_58-bbi"/><path class="leai81bxp"/>`,
		"fallback": "carbon:logo-python",
	});
}

export default Component;
