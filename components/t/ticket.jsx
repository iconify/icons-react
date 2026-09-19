import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/u/uqscuj1nf.css';
import '../../css/q/qj0noo85w.css';
import '../../css/j/jv3no3wus.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2zJZFeEW"><g class="gopnm44um"><path class="uqscuj1nf"/><path class="qj0noo85w"/><path class="jv3no3wus"/></g></mask></defs><path mask="url(#SVG2zJZFeEW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ticket",
	});
}

export default Component;
