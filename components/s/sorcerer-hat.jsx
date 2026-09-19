import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2yu2lbpb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOyPzUdDP"><path class="a2yu2lbpb"/></mask></defs><path mask="url(#SVGOyPzUdDP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sorcerer-hat",
	});
}

export default Component;
