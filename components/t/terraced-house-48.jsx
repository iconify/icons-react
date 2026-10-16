import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc7h1ybso.css';
import '../../css/s/saf2gf3kz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc7h1ybso"/><path class="saf2gf3kz"/>`,
		"fallback": "energy-icons:terraced-house-48",
	});
}

export default Component;
