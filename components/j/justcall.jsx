import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcj8ggbve.css';
import '../../css/a/aynzu-bjt.css';

const viewBox = {"width":222,"height":217};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcj8ggbve"/><path class="aynzu-bjt"/>`,
		"fallback": "thesvg-color:justcall",
	});
}

export default Component;
