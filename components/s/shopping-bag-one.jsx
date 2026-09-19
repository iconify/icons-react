import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vho2rjtrw.css';
import '../../css/m/m-ojbcwmy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzNw0cdOJ"><g class="v3_i3wktz"><rect class="vho2rjtrw"/><path class="m-ojbcwmy"/></g></mask></defs><path mask="url(#SVGzNw0cdOJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shopping-bag-one",
	});
}

export default Component;
