import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9hxg7tyk.css';
import '../../css/j/j6cvtntwi.css';
import '../../css/d/d4jypxbqx.css';
import '../../css/a/a7yq0nb5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9hxg7tyk"/><path class="j6cvtntwi"/><path class="d4jypxbqx"/><path class="a7yq0nb5g"/>`,
		"fallback": "material-icon-theme:postcss",
	});
}

export default Component;
