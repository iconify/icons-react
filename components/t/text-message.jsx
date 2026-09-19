import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/j/jlgcvxb3p.css';
import '../../css/o/osl6cdcam.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6D619boH"><g class="gopnm44um"><path class="jlgcvxb3p"/><path class="osl6cdcam"/></g></mask></defs><path mask="url(#SVG6D619boH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:text-message",
	});
}

export default Component;
