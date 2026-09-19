import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g8vpbdo.css';
import '../../css/n/n1986m9oo.css';
import '../../css/s/swj_dybjv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJvYUhbbT"><g class="l7g8vpbdo"><path class="n1986m9oo"/><path class="swj_dybjv"/></g></mask></defs><path mask="url(#SVGJvYUhbbT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:intermediate-mode",
	});
}

export default Component;
