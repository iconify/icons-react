import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9czz4bal.css';
import '../../css/k/kpj7x2bvw.css';
import '../../css/g/gy9jckxha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9czz4bal"/><path class="kpj7x2bvw"/><path class="gy9jckxha"/>`,
		"fallback": "energy-icons:smart-home-48",
	});
}

export default Component;
