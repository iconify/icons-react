import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp-o-80fw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoo1xZdsi"><path class="hp-o-80fw"/></mask></defs><path mask="url(#SVGoo1xZdsi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:right-one",
	});
}

export default Component;
