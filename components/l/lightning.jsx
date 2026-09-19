import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcn8ucyih.css';
import '../../css/j/j62e8oyno.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcn8ucyih"/><path class="j62e8oyno"/>`,
		"fallback": "ep:lightning",
	});
}

export default Component;
