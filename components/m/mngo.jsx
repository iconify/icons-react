import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgybm3bkh.css';
import '../../css/r/r01nltb0z.css';
import '../../css/j/jo8dh-bft.css';
import '../../css/r/rds2ovoio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgybm3bkh"/><path class="r01nltb0z"/><path class="jo8dh-bft"/><path class="rds2ovoio"/>`,
		"fallback": "token:mngo",
	});
}

export default Component;
