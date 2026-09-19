import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/y/ybatxgbvz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLbKKgdNp"><g class="aql7dnt-u"><circle class="kb9zbkb1z"/><path class="ybatxgbvz"/></g></mask></defs><path mask="url(#SVGLbKKgdNp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pie",
	});
}

export default Component;
