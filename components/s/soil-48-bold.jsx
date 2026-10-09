import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a99zx0bqt.css';
import '../../css/t/t9tlldbol.css';
import '../../css/z/zyduf68zh.css';
import '../../css/q/qoz9fybla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a99zx0bqt"/><path class="t9tlldbol"/><path class="zyduf68zh"/><path class="qoz9fybla"/>`,
		"fallback": "energy-icons:soil-48-bold",
	});
}

export default Component;
