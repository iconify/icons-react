import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhfn9yzfo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYCI0xe9j"><path class="jhfn9yzfo"/></mask></defs><path mask="url(#SVGYCI0xe9j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:right-two",
	});
}

export default Component;
