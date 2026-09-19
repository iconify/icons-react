import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vz-dvwm5z.css';
import '../../css/q/q4ik7kbpj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGz8FQVdSf"><g class="v3_i3wktz"><path class="vz-dvwm5z"/><path class="q4ik7kbpj"/></g></mask></defs><path mask="url(#SVGz8FQVdSf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tree-list",
	});
}

export default Component;
