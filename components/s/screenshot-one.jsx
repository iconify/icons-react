import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lpaon527v.css';
import '../../css/c/c6kjuqnsb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh7XlAdDD"><g class="rohhhzb0l"><path class="lpaon527v"/><rect class="c6kjuqnsb"/></g></mask></defs><path mask="url(#SVGh7XlAdDD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:screenshot-one",
	});
}

export default Component;
