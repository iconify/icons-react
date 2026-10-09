import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckdxm-8ru.css';
import '../../css/f/fhd5hqc9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckdxm-8ru"/><path class="fhd5hqc9p"/>`,
		"fallback": "energy-icons:oven-20",
	});
}

export default Component;
