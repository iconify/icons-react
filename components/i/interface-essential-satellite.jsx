import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4ld-7b2f.css';
import '../../css/b/b1u7f-d_l.css';
import '../../css/q/qw5i-xb1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4ld-7b2f"/><path class="b1u7f-d_l"/><path class="qw5i-xb1g"/>`,
		"fallback": "streamline-pixel:interface-essential-satellite",
	});
}

export default Component;
