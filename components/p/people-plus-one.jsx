import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as2wn2lgv.css';
import '../../css/d/duptweowj.css';
import '../../css/s/soahxebfl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEMywHeud"><g class="ft5dv1b6b"><path class="as2wn2lgv"/><path clip-rule="evenodd" class="duptweowj"/><path class="soahxebfl"/></g></mask></defs><path mask="url(#SVGEMywHeud)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-plus-one",
	});
}

export default Component;
