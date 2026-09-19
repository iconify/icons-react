import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qywweimyl.css';
import '../../css/p/p-h1svb7w.css';
import '../../css/k/kkftzqzny.css';
import '../../css/l/lijdjv4wn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQEbOccRQ"><g class="ft5dv1b6b"><path class="qywweimyl"/><path class="p-h1svb7w"/><path class="kkftzqzny"/><path class="lijdjv4wn"/></g></mask></defs><path mask="url(#SVGQEbOccRQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:play-basketball",
	});
}

export default Component;
