import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6c8tmzid.css';
import '../../css/f/f8eyw1sna.css';
import '../../css/u/u1jc8vaze.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9PaAjcIO"><g class="t6c8tmzid"><path class="f8eyw1sna"/><path class="u1jc8vaze"/></g></mask></defs><path mask="url(#SVG9PaAjcIO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-two",
	});
}

export default Component;
