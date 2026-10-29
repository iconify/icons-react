import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2yf3iojk.css';
import '../../css/b/bhlv4viug.css';
import '../../css/a/avwra9bwv.css';
import '../../css/x/xttyvqbqx.css';
import '../../css/d/da8bhmbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2yf3iojk wm-shadow"/><path class="bhlv4viug wm-k"/><path class="avwra9bwv wm-k"/><path class="wm-k xttyvqbqx"/><path class="da8bhmbhj wm-k"/>`,
		"fallback": "withicons-pastel:text-cursor",
	});
}

export default Component;
