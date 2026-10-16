import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-9uribkc.css';
import '../../css/k/kl96fjb_a.css';
import '../../css/z/zj2jh3sfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-9uribkc"/><path class="kl96fjb_a"/><path class="zj2jh3sfl"/>`,
		"fallback": "energy-icons:lockout-48-bold",
	});
}

export default Component;
