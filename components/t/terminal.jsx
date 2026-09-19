import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/ll720cc5b.css';
import '../../css/k/keqfhpopx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8H5f3cpk"><g class="v3_i3wktz"><rect class="ll720cc5b"/><path class="keqfhpopx"/></g></mask></defs><path mask="url(#SVG8H5f3cpk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:terminal",
	});
}

export default Component;
