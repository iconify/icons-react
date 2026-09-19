import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fux8zqblx.css';
import '../../css/l/l5mclvbum.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGwFpddgU"><g class="ft5dv1b6b"><path class="fux8zqblx"/><path class="l5mclvbum"/></g></mask></defs><path mask="url(#SVGGwFpddgU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tumblr",
	});
}

export default Component;
