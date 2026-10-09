import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyzjbf5oz.css';
import '../../css/b/bs8u9-bib.css';
import '../../css/d/dz2xsntoo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyzjbf5oz"/><path class="bs8u9-bib"/><path class="dz2xsntoo"/>`,
		"fallback": "energy-icons:thermometer-48",
	});
}

export default Component;
