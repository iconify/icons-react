import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ua9ahwbka.css';
import '../../css/v/vv6gn9baa.css';
import '../../css/i/i3u11bbdt.css';
import '../../css/h/hn-905oqb.css';
import '../../css/o/oc5vzqbcn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXkYfYcqE"><g class="ft5dv1b6b"><circle class="ua9ahwbka"/><path class="vv6gn9baa"/><circle class="i3u11bbdt"/><circle class="hn-905oqb"/><path class="oc5vzqbcn"/></g></mask></defs><path mask="url(#SVGXkYfYcqE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:koala-bear",
	});
}

export default Component;
