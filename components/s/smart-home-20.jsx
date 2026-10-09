import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz30y8b3r.css';
import '../../css/g/gtn82neio.css';
import '../../css/e/e3lx9cbyl.css';
import '../../css/j/jgfshtvfi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz30y8b3r"/><path class="gtn82neio"/><path class="e3lx9cbyl"/><path class="jgfshtvfi"/>`,
		"fallback": "energy-icons:smart-home-20",
	});
}

export default Component;
