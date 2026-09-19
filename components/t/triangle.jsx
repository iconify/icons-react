import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygdmzg_ll.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQleDNc7g"><path clip-rule="evenodd" class="ygdmzg_ll"/></mask></defs><path mask="url(#SVGQleDNc7g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:triangle",
	});
}

export default Component;
