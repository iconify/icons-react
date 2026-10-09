import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrkewflek.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrkewflek"/><path class="hwjgqrbah"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:pets-allowed-48-bold",
	});
}

export default Component;
