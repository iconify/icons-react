import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jxr8m2bzo.css';
import '../../css/h/h1b3bbbod.css';
import '../../css/o/o2u4fe-pd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOweoJeDO"><g class="rohhhzb0l"><path class="jxr8m2bzo"/><path class="h1b3bbbod"/><path class="o2u4fe-pd"/></g></mask></defs><path mask="url(#SVGOweoJeDO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vertical-timeline",
	});
}

export default Component;
