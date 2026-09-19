import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfk9ubm9c.css';
import '../../css/x/xe9uj2srj.css';
import '../../css/g/gvyjhvf0t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jfk9ubm9c"/><circle class="xe9uj2srj"/><path class="gvyjhvf0t"/>`,
		"fallback": "carbon:list-bulleted",
	});
}

export default Component;
