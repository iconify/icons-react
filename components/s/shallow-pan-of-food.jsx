import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qie-3kynn.css';
import '../../css/u/u3cjz0b9i.css';
import '../../css/z/zpx9uybjz.css';
import '../../css/g/g5dygi8kz.css';
import '../../css/c/cad8kdbkz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qie-3kynn"/><path class="u3cjz0b9i"/><path class="zpx9uybjz"/><path class="g5dygi8kz"/><path class="cad8kdbkz"/></g>`,
		"fallback": "fluent-emoji-flat:shallow-pan-of-food",
	});
}

export default Component;
