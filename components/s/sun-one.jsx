import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdd5oubow.css';
import '../../css/j/jo17i5bnz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMulGzc6e"><g class="ft5dv1b6b"><path class="hdd5oubow"/><path class="jo17i5bnz"/></g></mask></defs><path mask="url(#SVGMulGzc6e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sun-one",
	});
}

export default Component;
