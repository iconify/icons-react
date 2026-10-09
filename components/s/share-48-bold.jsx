import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob6rb5b4d.css';
import '../../css/g/g620y8-kq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob6rb5b4d"/><path class="g620y8-kq"/>`,
		"fallback": "energy-icons:share-48-bold",
	});
}

export default Component;
