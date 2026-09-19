import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs8n7gr_o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs8n7gr_o"/>`,
		"fallback": "fluent-mdl2:tag-group",
	});
}

export default Component;
