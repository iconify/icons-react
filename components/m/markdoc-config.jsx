import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nis8n537v.css';
import '../../css/s/s-upr6ely.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nis8n537v"/><path class="s-upr6ely"/>`,
		"fallback": "material-icon-theme:markdoc-config",
	});
}

export default Component;
