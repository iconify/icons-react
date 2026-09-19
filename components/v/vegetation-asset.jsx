import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glles2bcn.css';
import '../../css/a/aeily0buk.css';
import '../../css/f/f3_ob3l1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="glles2bcn"/><path class="aeily0buk"/><path class="f3_ob3l1l"/>`,
		"fallback": "carbon:vegetation-asset",
	});
}

export default Component;
