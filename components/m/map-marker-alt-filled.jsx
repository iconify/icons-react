import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be1g-y.css';
import '../../css/d/dr9rsw.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-jkxijw.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1rOeFd0w"><path class="be1g-y"/><circle class="dr9rsw"/></mask></defs><path mask="url(#SVG1rOeFd0w)" class="botfzx"/>`,
		"fallback": "line-md:map-marker-alt-filled",
	});
}

export default Component;
