import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/o/o8x35cc1s.css';
import '../../css/j/jvsjkqbyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyb2ZGe4D"><g class="rohhhzb0l"><path class="zbocpbbaf"/><path class="o8x35cc1s"/><path class="jvsjkqbyk"/></g></mask></defs><path mask="url(#SVGyb2ZGe4D)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:seo-folder",
	});
}

export default Component;
