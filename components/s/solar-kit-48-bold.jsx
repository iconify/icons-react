import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdq198b0v.css';
import '../../css/v/vltasnbml.css';
import '../../css/u/u9s6q-bmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdq198b0v"/><path class="vltasnbml"/><path class="u9s6q-bmz"/>`,
		"fallback": "energy-icons:solar-kit-48-bold",
	});
}

export default Component;
