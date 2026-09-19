import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3wwktf5z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHIMz2cTY"><path class="a3wwktf5z"/></mask></defs><path mask="url(#SVGHIMz2cTY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two-two",
	});
}

export default Component;
