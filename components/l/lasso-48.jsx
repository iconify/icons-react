import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-7g8zgze.css';
import '../../css/c/ca_dbzwra.css';
import '../../css/e/evhwq2bos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-7g8zgze"/><path class="ca_dbzwra"/><path class="evhwq2bos"/>`,
		"fallback": "energy-icons:lasso-48",
	});
}

export default Component;
