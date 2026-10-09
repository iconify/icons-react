import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alp85pbpf.css';
import '../../css/o/o3nn0j39f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alp85pbpf"/><path class="o3nn0j39f"/>`,
		"fallback": "energy-icons:pram-20-bold",
	});
}

export default Component;
