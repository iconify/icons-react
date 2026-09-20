import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6ddsb5j.css';
import '../../css/k/kbv8s5b4o.css';
import '../../css/q/qnk5sy1bt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt6ddsb5j"/><path class="kbv8s5b4o"/><path class="qnk5sy1bt"/>`,
		"fallback": "streamline-pixel:money-payments-self-payment",
	});
}

export default Component;
