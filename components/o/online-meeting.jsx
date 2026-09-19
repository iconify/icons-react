import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/v/vw3aex42z.css';
import '../../css/j/jql58hbjs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDom1ab1B"><g class="gopnm44um"><path class="vw3aex42z"/><path class="jql58hbjs"/></g></mask></defs><path mask="url(#SVGDom1ab1B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:online-meeting",
	});
}

export default Component;
