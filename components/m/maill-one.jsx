import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/q/qvva-ob9s.css';
import '../../css/s/s27jmxbxs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYt1XYddM"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="qvva-ob9s"/><path class="s27jmxbxs"/></g></mask></defs><path mask="url(#SVGYt1XYddM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:maill-one",
	});
}

export default Component;
