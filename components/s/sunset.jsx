import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/z-c_926fb.css';
import '../../css/v/vca6n0zbn.css';
import '../../css/g/g339bdcuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1PpcFd7B"><g class="rohhhzb0l"><path class="z-c_926fb"/><path class="vca6n0zbn"/><circle class="g339bdcuq"/></g></mask></defs><path mask="url(#SVG1PpcFd7B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sunset",
	});
}

export default Component;
