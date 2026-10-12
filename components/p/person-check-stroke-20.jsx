import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqkha6bxo.css';
import '../../css/z/zplth4i-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqkha6bxo"/><path class="zplth4i-g"/>`,
		"fallback": "garden:person-check-stroke-20",
	});
}

export default Component;
