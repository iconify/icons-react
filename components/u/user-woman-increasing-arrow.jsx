import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrvut578x.css';
import '../../css/a/ah4e5rm9p.css';
import '../../css/c/c7jvyvb0t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrvut578x"/><path class="ah4e5rm9p"/><path class="c7jvyvb0t"/>`,
		"fallback": "streamline-pixel:user-woman-increasing-arrow",
	});
}

export default Component;
