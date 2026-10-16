import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsgp-8odn.css';
import '../../css/z/zs1_24dzp.css';
import '../../css/x/xnni9p8to.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsgp-8odn"/><path class="zs1_24dzp"/><path class="xnni9p8to"/>`,
		"fallback": "energy-icons:recloser-48",
	});
}

export default Component;
