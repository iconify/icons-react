import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn-a9rbco.css';
import '../../css/g/g0ni6vb5b.css';
import '../../css/t/t0ojj79_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn-a9rbco"/><path class="g0ni6vb5b"/><path class="t0ojj79_p"/>`,
		"fallback": "energy-icons:scour-protection-20",
	});
}

export default Component;
