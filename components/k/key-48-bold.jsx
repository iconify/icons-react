import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umhq261qv.css';
import '../../css/g/gf_wrnomr.css';
import '../../css/p/p5jrx9s3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umhq261qv"/><path class="gf_wrnomr"/><path class="p5jrx9s3b"/>`,
		"fallback": "energy-icons:key-48-bold",
	});
}

export default Component;
