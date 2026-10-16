import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo0xevpbl.css';
import '../../css/b/b9o66unef.css';
import '../../css/z/zw7micchl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo0xevpbl"/><path class="b9o66unef"/><path class="zw7micchl"/>`,
		"fallback": "energy-icons:load-balancing-48-bold",
	});
}

export default Component;
