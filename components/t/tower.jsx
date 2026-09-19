import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mpz_0zach.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYDbtOuNw"><g class="v3_i3wktz"><path class="mpz_0zach"/><path class="j9hg1or3h"/></g></mask></defs><path mask="url(#SVGYDbtOuNw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tower",
	});
}

export default Component;
