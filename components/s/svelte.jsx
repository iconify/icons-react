import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkjo3ifcg.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkjo3ifcg"/>`,
		"fallback": "material-icon-theme:svelte",
	});
}

export default Component;
