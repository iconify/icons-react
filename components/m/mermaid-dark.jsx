import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il7l4tb_f.css';

const viewBox = {"width":491,"height":491};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il7l4tb_f"/>`,
		"fallback": "thesvg-color:mermaid-dark",
	});
}

export default Component;
