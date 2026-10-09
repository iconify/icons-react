import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci7qqaciu.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/q/qvksvzdwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci7qqaciu"/><path class="aqsnv9bnd"/><path class="qvksvzdwk"/>`,
		"fallback": "energy-icons:sun-check-20-bold",
	});
}

export default Component;
