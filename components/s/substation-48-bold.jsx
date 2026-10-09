import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhlehuybb.css';
import '../../css/z/zjk6qwb9u.css';
import '../../css/f/fkemwws4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhlehuybb"/><path class="zjk6qwb9u"/><path class="fkemwws4v"/>`,
		"fallback": "energy-icons:substation-48-bold",
	});
}

export default Component;
