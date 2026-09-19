import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3mn7piaq.css';
import '../../css/k/kz8euhb7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuw5dzeYm"><g class="ft5dv1b6b"><path class="k3mn7piaq"/><path clip-rule="evenodd" class="kz8euhb7z"/></g></mask></defs><path mask="url(#SVGuw5dzeYm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tag-one",
	});
}

export default Component;
