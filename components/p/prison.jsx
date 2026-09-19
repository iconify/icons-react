import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/e/estdtg-8h.css';
import '../../css/m/m8xtvw9bh.css';
import '../../css/q/qrkttdbdf.css';
import '../../css/d/dnb9si4ds.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu54fQdIq"><g class="gopnm44um"><path class="estdtg-8h"/><path class="m8xtvw9bh"/><path class="qrkttdbdf"/><path class="dnb9si4ds"/></g></mask></defs><path mask="url(#SVGu54fQdIq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:prison",
	});
}

export default Component;
