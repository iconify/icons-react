import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu4y7jb0r.css';
import '../../css/e/etdcedcfw.css';
import '../../css/g/gg2u61y6d.css';
import '../../css/e/e88ivvz4f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu4y7jb0r"/><path class="etdcedcfw"/><path class="gg2u61y6d"/><path class="e88ivvz4f"/>`,
		"fallback": "energy-icons:person-walking-20-bold",
	});
}

export default Component;
