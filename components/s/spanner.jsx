import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffn7vc-5q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZOMjqdzR"><path class="ffn7vc-5q"/></mask></defs><path mask="url(#SVGZOMjqdzR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:spanner",
	});
}

export default Component;
