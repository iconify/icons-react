import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbxmsfbue.css';
import '../../css/j/jnwbj5b5e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9SnDx6Nc"><g class="ft5dv1b6b"><rect class="fbxmsfbue"/><path class="jnwbj5b5e"/></g></mask></defs><path mask="url(#SVG9SnDx6Nc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reduce-two",
	});
}

export default Component;
