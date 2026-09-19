import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pfvzz0gys.css';
import '../../css/b/b0ef3ebmi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmiXgscJA"><g class="rohhhzb0l"><path class="pfvzz0gys"/><path class="b0ef3ebmi"/></g></mask></defs><path mask="url(#SVGmiXgscJA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ranking-list",
	});
}

export default Component;
