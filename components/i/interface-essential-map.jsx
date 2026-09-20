import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzzfaoeme.css';
import '../../css/n/n9kcvmbeu.css';
import '../../css/p/p5lazdb_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzzfaoeme"/><path class="n9kcvmbeu"/><path class="p5lazdb_r"/>`,
		"fallback": "streamline-pixel:interface-essential-map",
	});
}

export default Component;
